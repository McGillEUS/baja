# Ensure python is installed
# Then run the file using `python members.py > members.json`

import csv
import json

csv_file_path = "./members.csv"  # Replace with the path to your CSV file
output = []

with open(csv_file_path, 'r', encoding='utf-8') as csv_file:
    reader = csv.reader(csv_file)
    next(reader)  # Skip header row

    for row in reader:
        timestamp, name, year, department, supersystem, role, linkedin, blurb, picture = row
        output.append({
            "name": name,
            "year": year,
            "department": department,
            "supersystem": supersystem,
            "role": role,
            "linkedin": linkedin,
            "blurb": blurb
        })

print(json.dumps({"members": output}))
