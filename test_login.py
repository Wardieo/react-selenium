from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

# Set up Chrome options
chrome_options = Options()
chrome_options.add_argument("--headless")  # Run Chrome in headless mode
chrome_options.add_argument("--no-sandbox")  # Fix issues with running in CI
chrome_options.add_argument("--disable-dev-shm-usage")  # Fix shared memory issues
chrome_options.add_argument("--remote-debugging-port=9222")  # Debugging port
chrome_options.add_argument("--disable-gpu")  # Disable GPU acceleration

# Set up WebDriver
driver = webdriver.Chrome(options=chrome_options)

# Open the login page
driver.get("http://localhost:3000/login")

print("Page title:", driver.title)  # Print title for debugging

driver.quit()  # Close browser after test
