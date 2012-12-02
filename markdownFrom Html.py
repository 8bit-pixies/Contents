from jinja2 import Environment, FileSystemLoader
import markdown
import os

# Capture our current directory
THIS_DIR = os.path.dirname(os.path.abspath(__file__))

# Create the jinja2 environment.
# Notice the use of trim_blocks, which greatly helps control whitespace.
j2_env = Environment(loader=FileSystemLoader(THIS_DIR))

inputFile = open('markdownText.txt','r').read()
html = markdown.markdown(inputFile);

htmlFile = j2_env.get_template('ToCtemplate.html').render(mdDocument=html)

outputFile = open('markdownText.html','w')
outputFile.write(htmlFile)
outputFile.close()

