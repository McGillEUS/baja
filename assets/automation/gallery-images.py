import os

folder = 'gallery-images'
relative_folder = 'assets/' + folder
directory = os.fsencode(folder)
prev_directory = os.fsencode('../' + folder)

gallery_image_template = lambda name, folder: f'''<div class="col-sm-6 col-md-4">
    <a class="lightbox" href="{folder}/{name}">
        <img src="{folder}/{name}" alt="">
    </a>
</div>'''

output = []

for file in os.listdir(prev_directory):
     filename = os.fsdecode(file)
     if filename.endswith('.jpg') or filename.endswith('.jpeg') or filename.endswith('.png'):
        output.append(gallery_image_template(filename, relative_folder))

print('\n'.join(output))

# run with this in terminal: python gallery-images.py > gallery-images.html