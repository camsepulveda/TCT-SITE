export type Lang = "en" | "es";

type T = Record<string, Record<string, string>>;

export const t = {
  // ===== NAV =====
  nav_services: { en: "Services", es: "Servicios" },
  nav_conditions: { en: "Conditions", es: "Condiciones" },
  nav_why: { en: "Why TCT", es: "Por qué TCT" },
  nav_team: { en: "Our Team", es: "Nuestro Equipo" },
  nav_physicians: { en: "For Physicians", es: "Para Médicos" },
  nav_faq: { en: "FAQ", es: "Preguntas Frecuentes" },
  nav_refer: { en: "Refer a Patient", es: "Referir Paciente" },
  nav_appt: { en: "Request Appointment", es: "Solicitar Cita" },

  // ===== HERO =====
  hero_label: {
    en: "Puerto Rico\u2019s Bone Marrow Transplant & Cellular Therapy Center",
    es: "Centro de Trasplante de Médula Ósea y Terapia Celular en Puerto Rico",
  },
  hero_h1_pre: {
    en: "Advanced Bone Marrow Transplant",
    es: "Trasplante Avanzado de Médula Ósea",
  },
  hero_h1_post: {
    en: "Cellular Therapy in Puerto Rico",
    es: "Terapia Celular en Puerto Rico",
  },
  hero_sub: {
    en: "Specialized care for leukemia, lymphoma, multiple myeloma, and other blood disorders \u2014 with transplant, cellular therapy, and coordinated support close to home.",
    es: "Atención especializada para leucemia, linfoma, mieloma múltiple y otros trastornos sanguíneos \u2014 con trasplante, terapia celular y apoyo coordinado cerca de tu hogar.",
  },
  hero_cta_appt: { en: "Request an Appointment", es: "Solicitar una Cita" },
  hero_cta_refer: { en: "Refer a Patient", es: "Referir un Paciente" },
  hero_cta_call: {
    en: "\ud83d\udcde Speak with a Coordinator",
    es: "\ud83d\udcde Habla con un Coordinador",
  },

  // ===== CREDIBILITY STRIP =====
  cred_1: {
    en: "Specialized BMT & Cellular Therapy",
    es: "BMT y Terapia Celular Especializada",
  },
  cred_2: { en: "Bilingual Patient Support", es: "Apoyo Bilingüe al Paciente" },
  cred_3: {
    en: "Multidisciplinary Care Team",
    es: "Equipo Multidisciplinario",
  },
  cred_4: {
    en: "Advanced Hematologic Care in PR",
    es: "Cuidado Hematológico Avanzado en PR",
  },
  cred_fact: {
    en: "FACT Accredited Program",
    es: "Programa Acreditado por FACT",
  },

  // ===== WHY TCT =====
  why_label: { en: "Why TCT Oncology", es: "Por Qué TCT Oncology" },
  why_title_pre: { en: "Why Patients", es: "Por Qué Pacientes" },
  why_title_post: {
    en: "Physicians Choose TCT Oncology",
    es: "Médicos Eligen TCT Oncology",
  },
  why_intro: {
    en: "TCT Oncology is built to support patients with complex blood cancers through specialized transplant and cellular therapy care.",
    es: "TCT Oncology está diseñado para apoyar a pacientes con cánceres sanguíneos complejos a través de trasplante especializado y terapia celular.",
  },
  why_1_title: {
    en: "Puerto Rico\u2019s Only Comprehensive HCT Center",
    es: "El Único Centro HCT Integral en Puerto Rico",
  },
  why_1_desc: {
    en: "The only FACT-accredited hematopoietic cell therapy center in Puerto Rico \u2014 patients no longer need to travel to the mainland for transplant care.",
    es: "El único centro de terapia celular hematopoyética acreditado por FACT en Puerto Rico \u2014 los pacientes ya no necesitan viajar al continente para recibir trasplante.",
  },
  why_2_title: {
    en: "FACT-Accredited Quality & Safety",
    es: "Calidad y Seguridad Acreditada por FACT",
  },
  why_2_desc: {
    en: "Rigorous quality standards across clinical operations, laboratory practices, and patient care protocols \u2014 the same standard as leading mainland transplant centers.",
    es: "Estándares rigurosos de calidad en operaciones clínicas, prácticas de laboratorio y protocolos de atención \u2014 el mismo estándar que los principales centros de trasplante del continente.",
  },
  why_3_title: {
    en: "Bilingual, High-Touch Support",
    es: "Apoyo Bilingüe y Personalizado",
  },
  why_3_desc: {
    en: "Bilingual clinical coordination and patient navigation throughout the full treatment journey \u2014 from first consultation through long-term follow-up.",
    es: "Coordinación clínica bilingüe y navegación del paciente durante todo el tratamiento \u2014 desde la primera consulta hasta el seguimiento a largo plazo.",
  },
  why_4_title: {
    en: "Multidisciplinary Expert Team",
    es: "Equipo Multidisciplinario de Expertos",
  },
  why_4_desc: {
    en: "Transplant physicians, advanced practice providers, coordinators, social workers, and support staff working together around each patient.",
    es: "Médicos de trasplante, proveedores de práctica avanzada, coordinadores, trabajadores sociales y personal de apoyo trabajando juntos alrededor de cada paciente.",
  },
  why_5_title: {
    en: "Streamlined Physician Referral",
    es: "Referido Médico Ágil",
  },
  why_5_desc: {
    en: "We partner with referring physicians for timely evaluation, coordinated treatment planning, and clear clinical communication.",
    es: "Colaboramos con los médicos referidores para evaluación oportuna, planificación coordinada y comunicación clínica clara.",
  },
  why_6_title: {
    en: "Advanced Therapy Access",
    es: "Acceso a Terapias Avanzadas",
  },
  why_6_desc: {
    en: "From autologous and allogeneic transplants to CAR-T and emerging cellular therapy \u2014 the most advanced hematologic treatment options in Puerto Rico.",
    es: "Desde trasplantes autólogos y alogénicos hasta CAR-T y terapia celular emergente \u2014 las opciones más avanzadas de tratamiento hematológico en Puerto Rico.",
  },

  // ===== SERVICES =====
  svc_label: {
    en: "Bone Marrow Transplant & Cellular Therapy",
    es: "Trasplante de Médula Ósea y Terapia Celular",
  },
  svc_title: { en: "Advanced Treatment Pathways", es: "Vías de Tratamiento Avanzado" },
  svc_intro: {
    en: "Comprehensive evaluation, treatment planning, and long-term follow-up \u2014 matching each patient to the approach best suited to their diagnosis and clinical goals.",
    es: "Evaluación integral, planificación de tratamiento y seguimiento a largo plazo \u2014 adaptando a cada paciente el enfoque más adecuado para su diagnóstico y objetivos clínicos.",
  },
  svc_1_title: {
    en: "Autologous Stem Cell Transplant",
    es: "Trasplante Autólogo de Células Madre",
  },
  svc_1_desc: {
    en: "Uses the patient\u2019s own stem cells collected prior to high-dose chemotherapy. Appropriate for multiple myeloma, certain lymphomas, and selected other hematologic conditions.",
    es: "Utiliza las propias células madre del paciente recolectadas antes de quimioterapia de alta dosis. Indicado para mieloma múltiple, ciertos linfomas y otras condiciones hematológicas seleccionadas.",
  },
  svc_2_title: {
    en: "Allogeneic Stem Cell Transplant",
    es: "Trasplante Alogénico de Células Madre",
  },
  svc_2_desc: {
    en: "Uses donor stem cells to replace diseased bone marrow. Indicated for leukemia, myelodysplastic syndromes, aplastic anemia, and conditions where donor immune effects are therapeutically beneficial.",
    es: "Utiliza células madre de un donante para reemplazar la médula ósea enferma. Indicado para leucemia, síndromes mielodisplásicos, anemia aplásica y condiciones donde los efectos inmunológicos del donante son terapéuticamente beneficiosos.",
  },
  svc_3_title: {
    en: "CAR-T & Cellular Immunotherapy",
    es: "CAR-T e Inmunoterapia Celular",
  },
  svc_3_desc: {
    en: "Chimeric antigen receptor T-cell therapy and other advanced cellular immunotherapy approaches for selected patients with relapsed or refractory hematologic malignancies.",
    es: "Terapia de células T con receptor de antígeno quimérico y otros enfoques avanzados de inmunoterapia celular para pacientes seleccionados con neoplasias hematológicas recaídas o refractarias.",
  },
  svc_4_title: {
    en: "Long-Term Follow-Up & Supportive Care",
    es: "Seguimiento a Largo Plazo y Cuidado de Soporte",
  },
  svc_4_desc: {
    en: "Ongoing monitoring, complication management, survivorship support, and coordination with referring providers throughout the post-transplant recovery period and beyond.",
    es: "Monitoreo continuo, manejo de complicaciones, apoyo de sobrevivencia y coordinación con proveedores referidores durante el período de recuperación post-trasplante y más allá.",
  },

  // ===== CAR-T SPOTLIGHT =====
  cart_label: { en: "CAR-T Spotlight", es: "Enfoque en CAR-T" },
  cart_title: {
    en: "Cellular Therapy / CAR-T: Now Available in Puerto Rico",
    es: "Terapia Celular / CAR-T: Ahora Disponible en Puerto Rico",
  },
  cart_intro: {
    en: "Cellular therapy represents one of oncology\u2019s most powerful advances for selected patients with serious hematologic disease. TCT Oncology guides appropriate candidates through every step.",
    es: "La terapia celular representa uno de los avances más poderosos de la oncología para pacientes seleccionados con enfermedad hematológica seria. TCT Oncology guía a los candidatos apropiados en cada paso.",
  },
  cart_s1_step: { en: "Step 01", es: "Paso 01" },
  cart_s1_sub: { en: "Evaluation", es: "Evaluación" },
  cart_s1_title: { en: "Candidate Evaluation", es: "Evaluación del Candidato" },
  cart_s1_desc: {
    en: "Comprehensive assessment to determine eligibility, review prior therapies, and confirm clinical suitability for cellular therapy pathways.",
    es: "Evaluación integral para determinar elegibilidad, revisar terapias previas y confirmar idoneidad clínica para las vías de terapia celular.",
  },
  cart_s2_step: { en: "Step 02", es: "Paso 02" },
  cart_s2_sub: { en: "Treatment", es: "Tratamiento" },
  cart_s2_title: { en: "Treatment Coordination", es: "Coordinación de Tratamiento" },
  cart_s2_desc: {
    en: "End-to-end coordination of cell collection, manufacturing logistics, conditioning therapy, and infusion \u2014 with dedicated clinical support throughout.",
    es: "Coordinación integral de recolección celular, logística de manufactura, terapia de acondicionamiento e infusión \u2014 con apoyo clínico dedicado en todo momento.",
  },
  cart_s3_step: { en: "Step 03", es: "Paso 03" },
  cart_s3_sub: { en: "Follow-Up", es: "Seguimiento" },
  cart_s3_title: { en: "Monitoring & Follow-Up", es: "Monitoreo y Seguimiento" },
  cart_s3_desc: {
    en: "Structured post-infusion monitoring for response assessment, toxicity management, and long-term survivorship support.",
    es: "Monitoreo estructurado post-infusión para evaluación de respuesta, manejo de toxicidad y apoyo de sobrevivencia a largo plazo.",
  },

  // ===== CONDITIONS =====
  cond_label: { en: "Conditions We Treat", es: "Condiciones que Tratamos" },
  cond_title_pre: {
    en: "Specialized Care for Blood Cancers",
    es: "Atención Especializada para Cánceres de Sangre",
  },
  cond_title_post: { en: "Disorders", es: "Trastornos" },
  cond_1: { en: "Leukemia (AML, ALL, CML, CLL)", es: "Leucemia (AML, ALL, CML, CLL)" },
  cond_2: { en: "Lymphoma (Hodgkin & Non-Hodgkin)", es: "Linfoma (Hodgkin y No Hodgkin)" },
  cond_3: { en: "Multiple Myeloma", es: "Mieloma Múltiple" },
  cond_4: {
    en: "Myelodysplastic Syndromes (MDS)",
    es: "Síndromes Mielodisplásicos (MDS)",
  },
  cond_5: { en: "Aplastic Anemia", es: "Anemia Aplásica" },
  cond_6: { en: "Myeloproliferative Neoplasms", es: "Neoplasias Mieloproliferativas" },
  cond_7: {
    en: "Other Complex Blood Disorders",
    es: "Otros Trastornos Sanguíneos Complejos",
  },
  cond_cta_title: {
    en: "Not sure if transplant is right for you?",
    es: "\u00bfNo estás seguro si el trasplante es lo indicado para ti?",
  },
  cond_cta_desc: {
    en: "Our team evaluates each patient individually. The first step is a consultation \u2014 we\u2019ll review your history, diagnosis, and goals to determine whether transplant or cellular therapy may be appropriate.",
    es: "Nuestro equipo evalúa a cada paciente individualmente. El primer paso es una consulta \u2014 revisaremos tu historial, diagnóstico y objetivos para determinar si el trasplante o la terapia celular puede ser apropiada.",
  },
  cond_cta_consult: { en: "Request a Consultation", es: "Solicitar una Consulta" },

  // ===== TEAM =====
  team_label: { en: "Our Leadership", es: "Nuestro Liderazgo" },
  team_title: {
    en: "Our Distinguished Leadership Team",
    es: "Nuestro Distinguido Equipo de Liderazgo",
  },
  team_intro: {
    en: "Our multidisciplinary team brings together deep expertise in hematologic malignancies, transplantation, and cellular therapies \u2014 delivering advanced care options to patients in Puerto Rico.",
    es: "Nuestro equipo multidisciplinario reúne profunda experiencia en neoplasias hematológicas, trasplante y terapias celulares \u2014 ofreciendo opciones de cuidado avanzado a pacientes en Puerto Rico.",
  },
  team_support_title: {
    en: "Our Multidisciplinary Support Team",
    es: "Nuestro Equipo Multidisciplinario de Apoyo",
  },
  support_1_title: { en: "Transplant Coordinators", es: "Coordinadores de Trasplante" },
  support_1_desc: {
    en: "Guiding patients and families through every step \u2014 scheduling, education, logistics, and follow-up coordination.",
    es: "Guiando a pacientes y familias en cada paso \u2014 citas, educación, logística y coordinación de seguimiento.",
  },
  support_2_title: {
    en: "Advanced Practice Providers",
    es: "Proveedores de Práctica Avanzada",
  },
  support_2_desc: {
    en: "NPs and PAs specializing in hematologic malignancy management, symptom control, and day-to-day clinical coordination.",
    es: "NPs y PAs especializados en manejo de neoplasias hematológicas, control de síntomas y coordinación clínica diaria.",
  },
  support_3_title: { en: "Social Work & Navigation", es: "Trabajo Social y Navegación" },
  support_3_desc: {
    en: "Financial guidance, insurance navigation, caregiver education, and connecting families with community resources.",
    es: "Orientación financiera, navegación de seguros, educación para cuidadores y conexión de familias con recursos comunitarios.",
  },
  support_4_title: { en: "Pharmacy & Laboratory", es: "Farmacia y Laboratorio" },
  support_4_desc: {
    en: "FACT-accredited laboratory for stem cell collection, processing, and cryopreservation with specialized pharmacy support.",
    es: "Laboratorio acreditado por FACT para recolección, procesamiento y criopreservación de células madre con apoyo farmacéutico especializado.",
  },
  support_5_title: { en: "Nutrition & Rehabilitation", es: "Nutrición y Rehabilitación" },
  support_5_desc: {
    en: "Dietitians and physical therapists supporting nutritional optimization and functional recovery throughout treatment.",
    es: "Dietistas y fisioterapeutas apoyando la optimización nutricional y recuperación funcional durante el tratamiento.",
  },
  support_6_title: { en: "Symptom Management", es: "Manejo de Síntomas" },
  support_6_desc: {
    en: "Palliative care specialists ensuring patient comfort, quality of life, and psychological support throughout all phases.",
    es: "Especialistas en cuidado paliativo asegurando confort del paciente, calidad de vida y apoyo psicológico en todas las fases.",
  },

  // ===== PHYSICIANS =====
  phys_label: { en: "For Referring Physicians", es: "Para Médicos Referidores" },
  phys_title: {
    en: "A Transplant Partner You Can Trust",
    es: "Un Socio de Trasplante en Quien Puede Confiar",
  },
  phys_intro: {
    en: "We work closely with referring physicians to support timely review, coordinated evaluation, and continuity of care.",
    es: "Trabajamos estrechamente con los médicos referidores para apoyar la revisión oportuna, evaluación coordinada y continuidad del cuidado.",
  },
  phys_intro2: {
    en: "Our team responds to referrals within 24\u201348 hours. We provide direct access to our transplant physicians for case discussions and keep you informed at every stage.",
    es: "Nuestro equipo responde a referidos dentro de 24\u201348 horas. Proveemos acceso directo a nuestros médicos de trasplante para discusión de casos y le mantenemos informado en cada etapa.",
  },
  phys_indications_title: {
    en: "Common Referral Indications",
    es: "Indicaciones Comunes de Referido",
  },
  phys_refer_btn: { en: "Refer a Patient", es: "Referir un Paciente" },
  phys_expect_title: {
    en: "What to Expect When You Refer",
    es: "Qué Esperar al Referir",
  },
  phys_step_1: {
    en: "Submit referral by phone, fax, or secure form",
    es: "Envíe el referido por teléfono, fax o formulario seguro",
  },
  phys_step_2: {
    en: "Transplant physician reviews the case within 24\u201348 hours",
    es: "El médico de trasplante revisa el caso dentro de 24\u201348 horas",
  },
  phys_step_3: {
    en: "We coordinate evaluation scheduling directly with your patient",
    es: "Coordinamos la cita de evaluación directamente con su paciente",
  },
  phys_step_4: {
    en: "Ongoing communication with referring physician throughout treatment",
    es: "Comunicación continua con el médico referidor durante el tratamiento",
  },
  phys_step_5: {
    en: "Patient transitions back to your care with a detailed survivorship plan",
    es: "El paciente regresa a su cuidado con un plan detallado de sobrevivencia",
  },

  // ===== PATIENT JOURNEY =====
  journey_label: { en: "For Patients & Families", es: "Para Pacientes y Familias" },
  journey_title: {
    en: "We\u2019re with You at Every Step",
    es: "Estamos Contigo en Cada Paso",
  },
  journey_intro: {
    en: "We understand that transplant and cellular therapy can feel overwhelming. Our goal is to make each step clearer.",
    es: "Entendemos que el trasplante y la terapia celular pueden sentirse abrumadores. Nuestro objetivo es hacer cada paso más claro.",
  },
  journey_1_title: { en: "First Consultation", es: "Primera Consulta" },
  journey_1_desc: {
    en: "We review your diagnosis, medical history, and goals to determine whether transplant or cellular therapy may be an appropriate next step.",
    es: "Revisamos tu diagnóstico, historial médico y objetivos para determinar si el trasplante o la terapia celular puede ser el próximo paso apropiado.",
  },
  journey_2_title: { en: "Evaluation & Planning", es: "Evaluación y Planificación" },
  journey_2_desc: {
    en: "Comprehensive pre-transplant workup, donor matching if needed, insurance verification, and a detailed treatment plan.",
    es: "Evaluación pre-trasplante integral, búsqueda de donante si es necesario, verificación de seguro y un plan de tratamiento detallado.",
  },
  journey_3_title: { en: "Treatment", es: "Tratamiento" },
  journey_3_desc: {
    en: "Conditioning, transplant or cellular therapy infusion, and close monitoring \u2014 with your care team available throughout.",
    es: "Acondicionamiento, infusión de trasplante o terapia celular y monitoreo cercano \u2014 con tu equipo de cuidado disponible en todo momento.",
  },
  journey_4_title: { en: "Recovery & Follow-Up", es: "Recuperación y Seguimiento" },
  journey_4_desc: {
    en: "Ongoing monitoring for complications, immune recovery support, survivorship planning, and transition back to your local oncologist.",
    es: "Monitoreo continuo de complicaciones, apoyo de recuperación inmunológica, planificación de sobrevivencia y transición de regreso a tu oncólogo local.",
  },
  journey_callout_bold: {
    en: "You are not alone in this.",
    es: "No estás solo en esto.",
  },
  journey_callout: {
    en: "From your first call to long-term follow-up, a dedicated coordinator guides you through every step. We handle the logistics so you can focus on healing.",
    es: "Desde tu primera llamada hasta el seguimiento a largo plazo, un coordinador dedicado te guía en cada paso. Nosotros manejamos la logística para que puedas enfocarte en sanar.",
  },

  // ===== FAQ =====
  faq_label: { en: "FAQ", es: "Preguntas Frecuentes" },
  faq_title: { en: "Frequently Asked Questions", es: "Preguntas Frecuentes" },
  faq_1_q: {
    en: "Do I need a referral to be seen at TCT Oncology?",
    es: "\u00bfNecesito un referido para ser atendido en TCT Oncology?",
  },
  faq_1_a: {
    en: "A referral from your oncologist or primary care physician is recommended but not required. You may also contact us directly, and we will coordinate with your care team.",
    es: "Se recomienda un referido de tu oncólogo o médico primario, pero no es obligatorio. También puedes contactarnos directamente y coordinaremos con tu equipo de cuidado.",
  },
  faq_2_q: {
    en: "Can my doctor refer me directly?",
    es: "\u00bfPuede mi médico referirme directamente?",
  },
  faq_2_a: {
    en: "Yes. Referring physicians can contact our team directly by phone or form. We make the process straightforward with prompt clinical review, coordinated evaluation, and ongoing communication with the referring provider.",
    es: "Sí. Los médicos referidores pueden contactar a nuestro equipo directamente por teléfono o formulario. Hacemos el proceso sencillo con revisión clínica rápida, evaluación coordinada y comunicación continua con el proveedor referidor.",
  },
  faq_3_q: {
    en: "Does TCT Oncology accept my insurance?",
    es: "\u00bfTCT Oncology acepta mi plan médico?",
  },
  faq_3_a: {
    en: "We work with most major insurance plans in Puerto Rico and the mainland United States. Our team will verify your benefits and discuss coverage before treatment begins.",
    es: "Trabajamos con la mayoría de los planes médicos principales en Puerto Rico y Estados Unidos continental. Nuestro equipo verificará tus beneficios y discutirá la cobertura antes de comenzar el tratamiento.",
  },
  faq_4_q: {
    en: "Do I have to travel to the mainland for a transplant?",
    es: "\u00bfTengo que viajar al continente para un trasplante?",
  },
  faq_4_a: {
    en: "No. TCT Oncology provides FACT-accredited transplant and cellular therapy right here in Puerto Rico. You can receive the same standard of care without leaving the island.",
    es: "No. TCT Oncology provee trasplante y terapia celular acreditados por FACT aquí mismo en Puerto Rico. Puedes recibir el mismo estándar de cuidado sin salir de la isla.",
  },
  faq_5_q: {
    en: "What is FACT accreditation and why does it matter?",
    es: "\u00bfQué es la acreditación FACT y por qué importa?",
  },
  faq_5_a: {
    en: "FACT (Foundation for the Accreditation of Cellular Therapy) sets the highest quality and safety standards for transplant programs. Our accreditation means your care meets the same rigorous benchmarks as top mainland transplant centers.",
    es: "FACT (Foundation for the Accreditation of Cellular Therapy) establece los más altos estándares de calidad y seguridad para programas de trasplante. Nuestra acreditación significa que tu cuidado cumple con los mismos criterios rigurosos que los principales centros de trasplante del continente.",
  },
  faq_6_q: {
    en: "How long does the transplant process take?",
    es: "\u00bfCuánto tiempo toma el proceso de trasplante?",
  },
  faq_6_a: {
    en: "Timelines vary by case. The evaluation phase typically takes 2\u20134 weeks. The transplant itself requires a hospital stay of 2\u20134 weeks, followed by close outpatient monitoring for several months.",
    es: "Los tiempos varían por caso. La fase de evaluación típicamente toma 2\u20134 semanas. El trasplante en sí requiere una estadía hospitalaria de 2\u20134 semanas, seguida de monitoreo ambulatorio cercano por varios meses.",
  },
  faq_7_q: {
    en: "Is care available in Spanish?",
    es: "\u00bfEl cuidado está disponible en español?",
  },
  faq_7_a: {
    en: "Yes. Our entire clinical team is bilingual. You will receive all communication, consultations, and written materials in your preferred language.",
    es: "Sí. Todo nuestro equipo clínico es bilingüe. Recibirás toda la comunicación, consultas y materiales escritos en tu idioma preferido.",
  },

  // ===== PODCAST =====
  podcast_label: { en: "Nuestra Voz", es: "Nuestra Voz" },
  podcast_title: { en: "Célula a Célula", es: "Célula a Célula" },
  podcast_desc: {
    en: "Our Spanish-language patient education podcast \u2014 bringing the language of bone marrow transplantation and cellular therapy directly to patients, caregivers, and families across Puerto Rico and the broader Hispanic community.",
    es: "Nuestro podcast educativo en español para pacientes \u2014 acercando el lenguaje del trasplante de médula ósea y la terapia celular directamente a pacientes, cuidadores y familias en Puerto Rico y la comunidad hispana.",
  },

  // ===== FINAL CTA =====
  cta_title: { en: "Take the Next Step", es: "Da el Próximo Paso" },
  cta_desc: {
    en: "Whether you\u2019re a patient seeking evaluation or a physician ready to refer \u2014 our team is here to help you move forward with clarity and confidence.",
    es: "Ya seas un paciente buscando evaluación o un médico listo para referir \u2014 nuestro equipo está aquí para ayudarte a avanzar con claridad y confianza.",
  },
  cta_call: { en: "Call (787) 233-0676", es: "Llamar al (787) 233-0676" },
  cta_email: { en: "Email Our Team", es: "Escríbenos" },
  cta_hours: {
    en: "Monday\u2013Friday, 8:00 AM \u2013 5:00 PM AST \u00a0\u00b7\u00a0 Se habla espa\u00f1ol",
    es: "Lunes\u2013Viernes, 8:00 AM \u2013 5:00 PM AST \u00a0\u00b7\u00a0 We speak English",
  },

  // ===== FOOTER =====
  footer_links_title: {
    en: "Patients & Physicians",
    es: "Pacientes y Médicos",
  },
  footer_services: { en: "Services", es: "Servicios" },
  footer_conditions: { en: "Conditions", es: "Condiciones" },
  footer_team: { en: "Our Team", es: "Nuestro Equipo" },
  footer_refer: { en: "Refer a Patient", es: "Referir un Paciente" },
  footer_faq: { en: "FAQ", es: "Preguntas Frecuentes" },
  footer_contact: { en: "Contact", es: "Contacto" },
  footer_copyright: {
    en: "TCT Oncology LLC. All rights reserved.",
    es: "TCT Oncology LLC. Todos los derechos reservados.",
  },

  // ===== DOCTOR BIOS =====
  doc_cruz_role: { en: "President & Medical Director", es: "Presidente y Director Médico" },
  doc_cruz_bio: {
    en: "Director of the Blood and Marrow Transplantation and Cellular Therapy Program at Hospital Espa\u00f1ol Auxilio Mutuo and Hematology and Medical Oncology Fellowship Program Director at Hospital Municipal De San Juan.",
    es: "Director del Programa de Trasplante de Sangre y Médula Ósea y Terapia Celular en el Hospital Español Auxilio Mutuo y Director del Programa de Fellowship en Hematología y Oncología Médica en el Hospital Municipal De San Juan.",
  },
  doc_rodriguez_role: {
    en: "Vice President & CAR-T Program Director",
    es: "Vicepresidente y Director del Programa CAR-T",
  },
  doc_rodriguez_bio: {
    en: "Director of the CAR-T Cell Program at TCT Oncology. Completed advanced Blood and Marrow Transplantation Fellowship at H. Lee Moffitt Cancer Center. Research focus on novel molecular therapies and immunotherapies.",
    es: "Director del Programa de Células CAR-T en TCT Oncology. Completó fellowship avanzado en Trasplante de Sangre y Médula Ósea en H. Lee Moffitt Cancer Center. Enfoque de investigación en terapias moleculares novedosas e inmunoterapias.",
  },
  doc_bachier_role: {
    en: "Research Lead / Quality & Accreditation Director",
    es: "Líder de Investigación / Director de Calidad y Acreditación",
  },
  doc_bachier_bio: {
    en: "Board-certified Hematologist/Oncologist specializing in Transplant & Cellular Therapy. Distinguished career includes leadership at Texas Transplant Institute and Sarah Cannon Center for Blood Cancer. Active member of ASH, ASCO, and ASBMT.",
    es: "Hematólogo/Oncólogo certificado especializado en Trasplante y Terapia Celular. Carrera distinguida incluye liderazgo en Texas Transplant Institute y Sarah Cannon Center for Blood Cancer. Miembro activo de ASH, ASCO y ASBMT.",
  },
  doc_mariola_role: {
    en: "BMT & Cellular Therapy Specialist",
    es: "Especialista en BMT y Terapia Celular",
  },
  doc_mariola_bio: {
    en: "BMT-CT specialist at Auxilio Mutuo. Completed advanced Blood and Marrow Transplantation Fellowship at H. Lee Moffitt Cancer Center and the University of South Florida. Active in clinical research with CAR T-Cells, BiTEs, and other immunotherapies.",
    es: "Especialista en BMT-CT en Auxilio Mutuo. Completó fellowship avanzado en Trasplante de Sangre y Médula Ósea en H. Lee Moffitt Cancer Center y la Universidad del Sur de Florida. Activa en investigación clínica con células CAR-T, BiTEs y otras inmunoterapias.",
  },
  doc_karla_role: {
    en: "BMT & Cellular Therapy Specialist",
    es: "Especialista en BMT y Terapia Celular",
  },
  doc_karla_bio: {
    en: "Hematologist and Medical Oncologist with advanced training in bone marrow transplantation and cellular immunotherapy. Medical degree from Ponce Health Sciences University, advanced training at Moffitt Cancer Center. Assistant Professor at the University of Puerto Rico.",
    es: "Hematóloga y Oncóloga Médica con entrenamiento avanzado en trasplante de médula ósea e inmunoterapia celular. Grado médico de Ponce Health Sciences University, entrenamiento avanzado en Moffitt Cancer Center. Profesora Asistente en la Universidad de Puerto Rico.",
  },

  // ===== PHYSICIAN REFERRAL INDICATIONS =====
  ind_1: { en: "Acute Myeloid Leukemia (AML)", es: "Leucemia Mieloide Aguda (AML)" },
  ind_2: { en: "Acute Lymphoblastic Leukemia (ALL)", es: "Leucemia Linfoblástica Aguda (ALL)" },
  ind_3: { en: "Chronic Myeloid Leukemia (CML)", es: "Leucemia Mieloide Crónica (CML)" },
  ind_4: {
    en: "Hodgkin Lymphoma (relapsed/refractory)",
    es: "Linfoma de Hodgkin (recaída/refractario)",
  },
  ind_5: { en: "Non-Hodgkin Lymphoma", es: "Linfoma No Hodgkin" },
  ind_6: { en: "Multiple Myeloma", es: "Mieloma Múltiple" },
  ind_7: { en: "Myelodysplastic Syndromes (MDS)", es: "Síndromes Mielodisplásicos (MDS)" },
  ind_8: { en: "Aplastic Anemia", es: "Anemia Aplásica" },
  ind_9: { en: "CAR-T Therapy Candidates", es: "Candidatos a Terapia CAR-T" },
  ind_10: {
    en: "Other Complex Hematologic Disorders",
    es: "Otros Trastornos Hematológicos Complejos",
  },
} satisfies T;
