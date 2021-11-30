import xlrd

personTemplate = lambda name, role, department, year, blurb: f'''<!-- PERSON -->
<div class="dropdown col-md-4 col-sm-4 mg-sm">
    <div class="dropbtn teams animatez" data-effect="fadeInUp">
        <div class="pict">
            <img class="img-circle" src="./assets/Chris.jpg" alt="{name}">
        </div>
        <div class="desc animatez" data-effect="fadeInUp">
            <h4>
                <strong>{name}</strong>
            </h4>
            <p></p>
            <span>{role} <br> {department}, {year}</span>
        </div>
        <div class="dropdown-content">
            <span>{blurb}</span>
        </div>
    </div>
</div>
<!-- /PERSON -->'''

sheet = xlrd.open_workbook('./Subteam Leader Website Blurb (Responses).xls').sheet_by_index(0)

output = []

for i in range(1, sheet.nrows):
    _, _, name, year, department, role, blurb = sheet.row_values(i)
    output.append(personTemplate(name, role, department, year, blurb))

print('\n'.join(output))

#run with this in terminal: python people.py > people.html