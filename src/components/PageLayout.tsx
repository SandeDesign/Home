import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Menu, X } from 'lucide-react';
import Footer from './Footer';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function PageLayout({ children, title }: PageLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language } = useLanguage();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const getLocalizedLabels = () => {
    if (language
    )
  }
}