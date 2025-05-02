from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.enum.shapes import MSO_SHAPE
from pptx.dml.color import RGBColor

# Create a presentation
prs = Presentation()

# Define title slide
slide_title = prs.slides.add_slide(prs.slide_layouts[0])
title = slide_title.shapes.title
subtitle = slide_title.placeholders[1]
title.text = "७ वर्षे नेपाल विकास योजना — प्रदेश/जिल्ला-स्तर रणनीति सहित"
subtitle.text = "PlanNepal Initiative"

# Define helper function to add content slides
def add_slide(title_text, content_lines):
    slide = prs.slides.add_slide(prs.slide_layouts[1])
    title = slide.shapes.title
    body = slide.placeholders[1]
    title.text = title_text
    tf = body.text_frame
    tf.clear()
    for i, line in enumerate(content_lines):
        p = tf.add_paragraph() if i else tf.paragraphs[0]
        p.text = line
        p.font.size = Pt(18)
    return slide

# Add Objective slide
add_slide("परियोजनाको उद्देश्य", [
    "नेपाललाई समृद्ध बनाउने रणनीतिक योजना",
    "स्थानीय स्रोत र आवश्यकता आधारित योजना"
])

# Add Province Overview Table slide
add_slide("प्रदेशगत रूपरेखा", [
    "प्रदेश १: कृषि, पर्यटन (इलाम, झापा, खप्तड) — रु. 400 अर्ब",
    "प्रदेश २: उद्योग, शिक्षा (बिरगञ्ज, जनकपुर) — रु. 350 अर्ब",
    "बागमती: IT, स्मार्ट सहर (काठमाडौं, चितवन) — रु. 500 अर्ब",
    "गण्डकी: पर्यटन, जलविद्युत् (पोखरा, बागलुङ) — रु. 400 अर्ब",
    "लुम्बिनी: उत्पादन, पूर्वाधार (बुटवल, नेपालगञ्ज) — रु. 400 अर्ब",
    "कर्णाली: सिँचाइ, स्वास्थ्य (जुम्ला, सुर्खेत) — रु. 300 अर्ब",
    "सुदूरपश्चिम: सडक, कृषि (डोटी, कैलाली) — रु. 350 अर्ब"
])

# Province specific example (Province १)
add_slide("प्रदेश १ योजना", [
    "प्रमुख परियोजना: इलाम चिया उद्योग, झापा एग्रो हब, धरान IT पार्क",
    "बजेट: रु. 400 अर्ब (60% सरकारी, 40% निजी साझेदारी)",
    "25,000+ जनशक्तिको सीप विकास तालिम"
])

# District Level Slide
add_slide("जिल्ला–स्तर परियोजना", [
    "काठमाडौं: स्मार्ट सिटी + ई-सरकार — रु. 60 अर्ब",
    "पोखरा: अन्तर्राष्ट्रिय पर्यटन केन्द्र — रु. 40 अर्ब",
    "बर्दिया: वाइल्डलाइफ पर्यटन + सडक — रु. 25 अर्ब",
    "धनुषा: लघु उद्योग + ऊर्जा — रु. 30 अर्ब"
])

# Implementation Mechanism
add_slide("कार्यान्वयन संयन्त्र", [
    "जिल्ला समन्वय समिति + प्रदेश सरकार + संघीय सरकार",
    "Monitoring Dashboard: जनताले हेर्न सक्ने अनलाइन प्रणाली"
])

# Financial Breakdown
add_slide("वित्तीय स्रोत विवरण", [
    "संघीय बजेट — ५०%",
    "प्रदेश बजेट — १५%",
    "निजी क्षेत्र — २५%",
    "अन्तर्राष्ट्रिय दातृ संस्था — १०%"
])

# Expected Outcomes
add_slide("नतिजा / अपेक्षा", [
    "१० लाख रोजगारी सिर्जना",
    "५०% आयात प्रतिस्थापन",
    "प्रत्येक प्रदेशमा कम्तीमा २ नविन परियोजना",
    "SDG लक्ष्यहरूमा ठुलो प्रगति"
])

# Conclusion
add_slide("निष्कर्ष र अगाडि के?", [
    "एकीकृत रणनीति + स्थानीय कार्यान्वयन = दिगो विकास",
    "Think Global, Act Local दृष्टिकोण"
])

