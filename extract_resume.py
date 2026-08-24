from pathlib import Path
from zipfile import ZipFile
import re

p = Path(r'C:\Users\Nitin\Downloads\Video_portfolio-main\Video_portfolio-main\Nitin Resume perfect (1).docx')
print('file exists', p.exists())
with ZipFile(p) as z:
    xml = z.read('word/document.xml').decode('utf-8')
text = re.sub(r'<w:t[^>]*>(.*?)</w:t>', r'\1', xml)
text = re.sub(r'</w:p>', '\n', text)
text = re.sub(r'\s+', ' ', text)
output_path = Path(r'C:\Users\Nitin\Downloads\Video_portfolio-main\Video_portfolio-main\resume_text.txt')
output_path.write_text(text, encoding='utf-8')
print('wrote', output_path)
