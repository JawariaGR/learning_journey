import streamlit as stl
from datetime import datetime
from zoneinfo import ZoneInfo

Time_zones = [
    "UTC",
    "Asia/Karachi",
    "America/New_York",
    "Europe/London",
    "Asia/Tokyo",
    "Asia/Dubai",
    "Asia/Kolkata",
    "Australia/Sydney",
    "America/Los_Angeles",
    "Europe/Berlin"
]

stl.title("Time Zone App")
selected_timezane = stl.multiselect("Select TimeZones",Time_zones,default=["Asia/Karachi","UTC"])

stl.subheader("Selected TimeZones")
for tz in selected_timezane:
    current_time =datetime.now(ZoneInfo(tz)).strftime("%Y-%m-%d %I %H:%M:%S %p")
    stl.write(f"**{tz}**:{current_time}")


stl.subheader("Convert timeBetween Time Zone")
current_time = stl.time_input("Current Time",value=datetime.now().time())
from_tz = stl.selectbox("From Timezones",Time_zones, index=0)
to_tz = stl.selectbox("To Timezone",Time_zones,index=1) 
if stl.button("Convert Time"):
    date_time = datetime.combine(datetime.today(),current_time,tzinfo=ZoneInfo(from_tz))
    converted_time = date_time.astimezone(ZoneInfo(to_tz)).strftime("%Y-%m-%d %I %H:%M:%S %p")

    stl.success(f"Converted Time in {to_tz}:{converted_time}")