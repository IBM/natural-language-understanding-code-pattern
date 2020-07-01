import os
import time
import sys
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.common.exceptions import NoSuchElementException

# Do an action on the app's landing page
options = Options()
options.add_argument('--headless')
options.add_argument('--no-sandbox')
options.add_argument('--disable-dev-shm-usage')
driver = webdriver.Chrome(options=options)

success = False

try:
    app_url = os.environ.get("APP_URL", "http://localhost:5000/")
    print("APP_URL: ", app_url)
    driver.get(app_url)  # Open a browser to the app's landing page

    time.sleep(3)  # Init time needed?

    print("Title: ", driver.title)
    expected_title = "Natural Language Understanding"
    if driver.title != expected_title:
        raise Exception("Title should be " + expected_title)

    try:
        driver.find_element_by_class_name('react-json-view')
    except NoSuchElementException:
        pass
    else:
        print("Found the JSON view before it was expected")
        sys.exit("Experience Test Failed")

    # Find button and click it
    analyze_button = driver.find_element_by_xpath("//button[contains(text(),'Analyze')]")
    analyze_button.click()

    time.sleep(10)

    # Find and press the JSON tab
    json_button = driver.find_element_by_xpath("//button/span[contains(text(),'JSON')]")
    json_button.click()

    json_view = driver.find_element_by_class_name('react-json-view')
    json_view_text = json_view.text

    # Simplistic check for something like this in the JSON:
    # 0:{
    # "text":"treasure ship"
    # "relevance":0.662703
    # "count":1
    # }
    expected = "treasure ship"
    if expected not in json_view_text:
        raise Exception("Treasure Ship Test Failed")
    else:
        print("Treasure Ship Test Success")

    success = True

except Exception as e:
    print("Exception: ", e)
    raise

finally:
    driver.quit()
    if success:
        print("Experience Test Successful")
    else:
        sys.exit("Experience Test Failed")
