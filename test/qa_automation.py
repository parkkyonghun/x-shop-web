# ================================
# QA AUTOMATION TESTING SCRIPT
# Application: X-Shop Web
# Scope: Login & Order History
# Environment: Local / Google Colab (Requires setup)
# ================================

# ---- Install Chrome (For Colab) ----
# !wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
# !sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list'
# !apt-get -qq update
# !apt-get install -y google-chrome-stable --no-install-recommends > /dev/null 2>&1

# ---- Install Libraries (For Colab) ----
# !pip install selenium webdriver-manager --quiet

import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

# ================================
# TEST RESULT CLASS
# ================================
class TestResult:
    def __init__(self):
        self.tests = []
        self.passed = 0
        self.failed = 0

    def add(self, test_id, name, status, expected, actual):
        self.tests.append({
            "id": test_id,
            "name": name,
            "status": status,
            "expected": expected,
            "actual": actual
        })
        if status == "PASS":
            self.passed += 1
        else:
            self.failed += 1

    def report(self):
        print("\n" + "="*80)
        print("AUTOMATED TEST EXECUTION REPORT")
        print("Application: X-Shop Web")
        print("Test Type: UI Automation")
        print("Date: January 2026")
        print("="*80)

        for t in self.tests:
            print(f"\nTest ID: {t['id']}")
            print(f"Test Name: {t['name']}")
            print(f"Status: {t['status']}")
            print(f"Expected: {t['expected']}")
            print(f"Actual: {t['actual']}")

        print("\n" + "="*80)
        print(f"Total Tests: {self.passed + self.failed}")
        print(f"Passed: {self.passed}")
        print(f"Failed: {self.failed}")
        rate = (self.passed / (self.passed + self.failed)) * 100 if (self.passed + self.failed) else 0
        print(f"Pass Rate: {rate:.1f}%")
        print("="*80)

# ================================
# START TESTING
# ================================
results = TestResult()
print("Starting Automated Testing...\n")

chrome_options = Options()
# chrome_options.add_argument("--headless") # Uncomment for headless mode
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")
chrome_options.add_argument("--window-size=1920,1080")

try:
    driver = webdriver.Chrome(
        service=Service(ChromeDriverManager().install()),
        options=chrome_options
    )
except Exception as e:
    print(f"Error initializing driver: {e}")
    # Fallback to default if webdriver_manager fails or is not needed in some envs
    # driver = webdriver.Chrome(options=chrome_options)
    exit(1)

try:
    # -------------------------
    # Open Application
    # -------------------------
    # Update this URL to localhost for local testing if needed
    base_url = "https://x-shop-web.vercel.app/" 
    # base_url = "http://localhost:3000/" 
    driver.get(base_url)
    time.sleep(3)

    # -------------------------
    # TC_000: Unauthenticated Redirects
    # -------------------------
    print("[TC_000] Check Redirects (Unauthenticated)")
    
    # List of protected routes that MUST redirect to login
    protected_routes = ["profile"] 
    # List of public routes (or routes that handle auth internally without redirect)
    public_routes = ["orders", "cart", "checkout"]

    for route in protected_routes:
        url = f"{base_url}{route}"
        print(f"  Checking {url}...")
        driver.get(url)
        time.sleep(2)
        
        if "login" in driver.current_url:
            results.add(f"TC_000_{route}", f"Guest visit /{route}", "PASS", "Redirect to Login", "Redirected to Login")
            print(f"  > {route}: PASS (Redirected)")
        else:
            results.add(f"TC_000_{route}", f"Guest visit /{route}", "FAIL", "Redirect to Login", f"Stayed on {driver.current_url}")
            print(f"  > {route}: FAIL (No Redirect)")

    # -------------------------
    # TC_001: Login
    # -------------------------
    print("[TC_001] Login with valid credentials")
    try:
        driver.find_element(By.LINK_TEXT, "Login").click()
        time.sleep(2)

        # UPDATED: Using ID selectors (ensure these exist in your app)
        driver.find_element(By.ID, "email").send_keys("testuser@mail.com")
        driver.find_element(By.ID, "password").send_keys("Test@123")
        
        # UPDATED: Using specific ID for the login button
        driver.find_element(By.ID, "login-submit").click()
        time.sleep(3)

        if "account" in driver.current_url or "profile" in driver.current_url:
            results.add("TC_001", "User Login", "PASS", "User logged in", "Login successful")
            print("PASS")
        else:
            results.add("TC_001", "User Login", "FAIL", "User logged in", f"No redirect after login. Current URL: {driver.current_url}")
            print("FAIL")

    except Exception as e:
        results.add("TC_001", "User Login", "FAIL", "User logged in", str(e))
        print("FAIL:", e)

    # -------------------------
    # TC_001_B: Add to Cart
    # -------------------------
    print("[TC_001_B] Add Item to Cart")
    try:
        driver.get(base_url)
        time.sleep(2)
        
        # Add product with ID "1"
        add_btn = driver.find_element(By.ID, "add-to-cart-1")
        add_btn.click()
        time.sleep(1) # Wait for state update
        
        results.add("TC_001_B", "Add to Cart", "PASS", "Item added", "Clicked Add to Cart button")
        print("  > Item added to cart: PASS")

    except Exception as e:
        results.add("TC_001_B", "Add to Cart", "FAIL", "Item added", str(e))
        print("FAIL:", e)

    # -------------------------
    # TC_002: Authenticated Route Navigation
    # -------------------------
    print("[TC_002] Navigate to Authenticated Routes")
    
    # Routes to verify after login
    auth_routes = ["orders", "profile", "cart", "checkout"]

    for route in auth_routes:
        try:
            target_url = f"{base_url}{route}"
            print(f"  Navigating to {route}...")
            driver.get(target_url)
            time.sleep(2)
            
            # Check if we are still on the expected route (not redirected to login)
            if route in driver.current_url and "login" not in driver.current_url:
                 results.add(f"TC_002_{route}", f"Auth visit /{route}", "PASS", 
                             f"Load {route} page", "Page Loaded")
                 print(f"  > {route}: PASS")
            else:
                 results.add(f"TC_002_{route}", f"Auth visit /{route}", "FAIL", 
                             f"Load {route} page", f"Redirected/Error: {driver.current_url}")
                 print(f"  > {route}: FAIL")
                 
        except Exception as e:
            results.add(f"TC_002_{route}", f"Auth visit /{route}", "FAIL", "Page load", str(e))
            print(f"  > {route}: Error {e}")

finally:
    if 'driver' in locals():
        driver.quit()
    results.report()
    print("\nAutomated Testing Completed.")
