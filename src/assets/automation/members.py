# Ensure python is installed
# In the terminal, install module xlrd using `pip install xlrd` 
# Then run the file using `python members.py > members.json`

import xlrd
import json

# Open the sheet
# Make sure it's a .xls file (open a .xlsx doc in excel and save as .xls)
sheet = xlrd.open_workbook("./members.xls").sheet_by_index(0)
output = []

for i in range(1, sheet.nrows):
    # Grab target columns
    _, name, linkedin, year, department, role, blurb = sheet.row_values(i)
    output.append({
        "name": name,
        "linkedin": linkedin,
        "year": year,
        "department": department,
        "role": role,
        "blurb": blurb
    })

print(json.dumps({"members": output}))
