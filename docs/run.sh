rm ./Памятка.docx

./pandoc.exe ./Памятка.md -f markdown -t docx -o Памятка.docx --highlight-style breezeDark 

start ./Памятка.docx

# Включить fenced_code_attributes, grid_tables
# https://pandoc.org/chunkedhtml-demo/8.5-verbatim-code-blocks.html
# https://pandoc.org/MANUAL.html#extension-grid_tables:~:text=Extension%3A-,grid_tables,-%C2%B1