# Abogado Virtual

Plataforma digital de consulta legal con abogados verificados y especializados.

## 🎯 Descripción

Abogado Virtual es una aplicación web que conecta personas necesitadas de asesoría legal con abogados profesionales verificados. Ofrece una forma rápida, confiable y accesible para obtener consulta legal en línea.

## ✨ Características

- 🔍 **Sistema de búsqueda avanzado** - Filtros por especialidad, ubicación, precio
- ⚡ **Match rápido** - Algoritmo para encontrar el abogado más adecuado
- 💬 **Chat integrado** - Comunicación directa post-pago
- ✅ **Abogados verificados** - Acreditación y revisión de profesionales
- 💳 **Pagos seguros** - Integración con Stripe
- ⭐ **Sistema de calificaciones** - Reviews y ratings de usuarios
- 📱 **Responsive design** - Funciona en todos los dispositivos

## 🛠️ Stack Tecnológico

### Frontend
- **Next.js 14** - React framework moderno
- **TypeScript** - Type safety
- **Tailwind CSS** - Estilos y diseño

### Backend
- **Next.js API Routes** - Serverless backend
- **Node.js** - Runtime

### Base de Datos
- **PostgreSQL** (Supabase) - Base de datos relacional

### Integraciones
- **Stripe** - Procesamiento de pagos
- **WhatsApp** - Comunicación con abogados

## 🚀 Quickstart

### Requisitos
- Node.js 16+
- npm o yarn
- Una cuenta de Supabase
- Credenciales de Stripe

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/gonzaloraknarok88/abogado-virtual.git
cd abogado-virtual

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus credenciales

# Ejecutar desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
abogado-virtual/
├── app/
│   ├── components/       # Componentes React reutilizables
│   ├── api/             # Rutas API
│   ├── pages/           # Páginas de la aplicación
│   └── layout.tsx       # Layout principal
├── public/              # Archivos estáticos
├── sql/                 # Scripts de base de datos
├── .env.example         # Variables de entorno ejemplo
├── package.json         # Dependencias
└── README.md            # Este archivo
```

## 🌐 Abogados Disponibles

1. **Rayen Araya** - Derecho Laboral, Familia
2. **Yuri** - Derecho Penal, Comercial
3. **Pablo** - Derecho Administrativo, Tributario
4. **Elizabeth** - Derecho Civil, Contratos
5. **Javiera Correa** - Derecho Ambiental, Inmobiliario
6. **Nathalie** - Derecho Internacional, Migratorio

## 📊 Funcionalidades Principales

### Para Usuarios
- Buscar y filtrar abogados
- Realizar reservas de consulta
- Pagar de forma segura
- Acceder a chat post-pago
- Dejar reseñas y calificaciones
- Ver historial de consultas

### Para Abogados
- Perfil profesional verificado
- Dashboard de consultas
- Gestión de disponibilidad
- Sistema de métricas (Pro)
- Recibir pagos automáticamente

## 🔐 Seguridad

- Encriptación SSL/TLS
- Autenticación segura
- Validación de datos
- Cumplimiento RGPD
- Protección de datos sensibles

## 📈 Roadmap

- [ ] App móvil (iOS/Android)
- [ ] Videollamadas integradas
- [ ] Sistema de suscripción
- [ ] Blog de artículos legales
- [ ] Integración con notarías
- [ ] Inteligencia artificial para recomendaciones

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo licencia MIT. Ver `LICENSE` para más detalles.

## 📧 Contacto

Para preguntas o sugerencias, contacta a: support@abogado-virtual.com

## 🙏 Agradecimientos

Desarrollado con ❤️ por Perplexity para conectar la justicia accesible con todos.

---

**Estado**: En desarrollo activo 🚀
**Última actualización**: Enero 2026
