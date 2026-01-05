#!/usr/bin/env python3
# Script para generar 100+ leads desde diferentes fuentes
# (LinkedIn, TikTok, X, Google Ads)

import random
import csv
from datetime import datetime, timedelta

# Nombres
first_names = [
    'Juan', 'Maria', 'Carlos', 'Ana', 'Luis', 'Elena', 'Pedro', 'Rosa',
    'Miguel', 'Sofia', 'Diego', 'Lucia', 'Francisco', 'Carmen', 'Antonio',
    'Isabel', 'Roberto', 'Angela', 'Manuel', 'Patricia', 'Jorge', 'Laura',
    'Ramon', 'Marta', 'David', 'Sandra', 'Javier', 'Beatriz', 'Enrique',
    'Dolores', 'Andres', 'Magdalena', 'Sergio', 'Francisca', 'Felipe',
    'Josefa', 'Raul', 'Manuela', 'Ricardo', 'Catalina', 'Eduardo', 'Irene',
    'Fernando', 'Victoria', 'Guillermo', 'Rocio', 'Hector', 'Soledad',
    'Ismael', 'Marisa', 'Julio', 'Josefina', 'Leopoldo', 'Esperanza',
    'Marcelino', 'Adoracion', 'Nicolas', 'Consuela', 'Oswaldo', 'Lidia',
    'Pascual', 'Amparo', 'Raimundo', 'Pillar', 'Salvador', 'Araceli',
    'Tomas', 'Remedios', 'Valentin', 'Modesta', 'Victor', 'Serafina',
    'Venancio', 'Virgilia', 'Vidal', 'Valeria', 'Dionisio', 'Violeta',
    'Efren', 'Valeriana', 'Epifanio', 'Venancia', 'Everardo', 'Veronica',
    'Emeterio', 'Velia', 'Eleuterio', 'Verticinia', 'Euginio', 'Vicencia',
    'Evaristo', 'Victorina', 'Evencio', 'Virgina', 'Exuperancio', 'Violerta'
]

last_names = [
    'Garcia', 'Martinez', 'Rodriguez', 'Hernandez', 'Lopez', 'Gonzalez',
    'Perez', 'Sanchez', 'Torres', 'Ramirez', 'Cruz', 'Morales', 'Gutierrez',
    'Ortiz', 'Jimenez', 'Romero', 'Castro', 'Reyes', 'Vargas', 'Medina',
    'Pena', 'Vega', 'Silva', 'Dominguez', 'Rivas', 'Campos', 'Aguilar',
    'Aguirre', 'Nunez', 'Acosta', 'Flores', 'Moreno', 'Maldonado',
    'Molina', 'Ochoa', 'Salazar', 'Salinas', 'Salas', 'Sandoval',
    'Santiago', 'Santana', 'Santis', 'Saravia', 'Sauceda', 'Saucedo',
    'Sauced', 'Saucez', 'Saucier', 'Saucil', 'Saucilla', 'Saucino',
    'Saucio', 'Saucit', 'Sauciva', 'Saucivez', 'Saucizo', 'Saucizuela',
    'Saucizuelo', 'Saucielo', 'Sauciella', 'Sauciellas'
]

# Empresas
companies = [
    'Tech Solutions', 'Digital Minds', 'Innovate Now', 'Cloud Systems',
    'Data Analytics', 'Web Design Co', 'Marketing Pro', 'Sales Force',
    'Business Consulting', 'Financial Advisors', 'Legal Services', 'Real Estate Plus',
    'HR Solutions', 'IT Services', 'Software Dev', 'Mobile Apps Inc',
    'E-commerce Hub', 'Logistics Network', 'Health Care Plus', 'Education Tech',
    'Travel Solutions', 'Food Delivery', 'Fashion Retail', 'Auto Services',
    'Insurance Group', 'Banking Solutions', 'Energy Solutions', 'Construction Co'
]

# Tipo de caso
case_types = ['Laboral', 'Civil', 'Penal', 'Administrativo', 'Mercantil', 'Familiar', 'Arrendamiento']

# Ciudades de Chile
cities = ['Santiago', 'Vina del Mar', 'Valparaiso', 'Concepcion', 'Valdivia', 'Puerto Montt', 'La Serena', 'Coquimbo', 'Antofagasta', 'Iquique']

# Estados
states = ['Nuevo', 'Calificado', 'En Negociacion', 'Rechazado']

# Fuentes
sources = ['LinkedIn', 'TikTok', 'X', 'Google Ads', 'Facebook', 'Instagram', 'Referencia', 'Directo']

def generate_email(first, last):
    domains = ['gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com', 'empresa.cl']
    return f"{first.lower()}.{last.lower()}@{random.choice(domains)}"

def generate_phone():
    return f"+56 9 {random.randint(1000, 9999)} {random.randint(1000, 9999)}"

def generate_leads(num_leads=120):
    leads = []
    today = datetime.now()
    
    for i in range(1, num_leads + 1):
        first = random.choice(first_names)
        last = random.choice(last_names)
        
        lead = {
            'ID': i,
            'NOMBRE': f"{first} {last}",
            'EMAIL': generate_email(first, last),
            'TELEFONO': generate_phone(),
            'TIPO_CASO': random.choice(case_types),
            'CIUDAD': random.choice(cities),
            'ESTADO': random.choice(states),
            'FECHA_CAPTURA': (today - timedelta(days=random.randint(0, 60))).strftime('%Y-%m-%d'),
            'FUENTE': random.choice(sources),
            'NOTAS': f"Lead {i} generado de {random.choice(sources)}"
        }
        leads.append(lead)
    
    return leads

def save_to_csv(leads, filename='leads_data.csv'):
    if not leads:
        return
    
    with open(filename, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=leads[0].keys())
        writer.writeheader()
        writer.writerows(leads)
    
    print(f"Se generaron {len(leads)} leads en {filename}")

if __name__ == '__main__':
    leads = generate_leads(120)
    save_to_csv(leads)
    
    # Imprimir primeros 5 leads como ejemplo
    print("\nPrimeros 5 leads generados:")
    for lead in leads[:5]:
        print(lead)
