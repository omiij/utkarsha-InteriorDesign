import { useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  Weekend, // Living Room
  Kitchen, // Kitchen Remodeling
  Bed, // Bedroom Interiors
  Business, // Office Spaces
  Spa, // Bathroom Renovation
  Yard, // Outdoor Spaces
  Handyman, // Custom Carpentry
  Roofing, // Roofing Solutions
  Lightbulb, // Lighting Design
  Brush, // Wall Painting
  GridView, // Flooring
} from "@mui/icons-material";
import interiorBg from "../../Images/1.png";

import styles from "./InteriorServices.module.scss";

const services = [
  {
    title: "Living Room Design",
    desc: "Modern and elegant living room setups.",
    icon: <Weekend fontSize="large" />,
  },
  {
    title: "Kitchen Remodeling",
    desc: "Upgrade your kitchen with the latest designs.",
    icon: <Kitchen fontSize="large" />,
  },
  {
    title: "Bedroom Interiors",
    desc: "Custom bedroom decor with comfort in mind.",
    icon: <Bed fontSize="large" />,
  },
  {
    title: "Office Spaces",
    desc: "Stylish office interiors for productivity.",
    icon: <Business fontSize="large" />,
  },
  {
    title: "Bathroom Renovation",
    desc: "Luxury bathroom makeovers with modern fixtures.",
    icon: <Spa fontSize="large" />,
  },
  {
    title: "Outdoor Spaces",
    desc: "Enhancing outdoor living with beautiful designs.",
    icon: <Yard fontSize="large" />,
  },
  {
    title: "Custom Carpentry",
    desc: "Handcrafted furniture and wooden decor.",
    icon: <Handyman fontSize="large" />,
  },
  {
    title: "Roofing Solutions",
    desc: "Durable and aesthetic roofing options.",
    icon: <Roofing fontSize="large" />,
  },
  {
    title: "Lighting Design",
    desc: "Creative lighting setups for a perfect ambiance.",
    icon: <Lightbulb fontSize="large" />,
  },
  {
    title: "Wall Painting",
    desc: "Professional painting services with premium colors.",
    icon: <Brush fontSize="large" />,
  },
  {
    title: "Flooring Solutions",
    desc: "Wood, marble, and tile flooring for all styles.",
    icon: <GridView fontSize="large" />,
  },
];

export default function InteriorServices() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={styles.interiorServices}
      style={{ backgroundImage: `url(${interiorBg})` }}
    >
      {/* Hero Section */}
      <div className={styles.hero}>
        <Typography variant="h1">Interior Design Services</Typography>
      </div>

      {/* Services Section */}
      <Container className={styles.services}>
        {services.map((service, index) => (
          <Card key={index} sx={{ boxShadow: 3 }}>
            <CardContent>
              {service.icon}
              <Typography className={styles.title} variant="h5">
                {service.title}
              </Typography>
              <Typography
                className={styles.desc}
                variant="body2"
                color="text.secondary"
              >
                {service.desc}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Container>
    </div>
  );
}
