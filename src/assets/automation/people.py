# Ensure python is installed
# In the terminal, install module xlrd using `pip install xlrd` 
# Then run the file using `python people.py > people.json`

import xlrd
import json

sheet = xlrd.open_workbook("./Subteam Leader Website Blurb (Responses).xls").sheet_by_index(0)
output = []

for i in range(1, sheet.nrows):
    _, _, name, year, department, role, blurb = sheet.row_values(i)
    output.append({
        "name": name,
        "year": year,
        "department": department,
        "role": role,
        "blurb": blurb
    })

print(json.dumps({"people": output}))
