import './erpDesignSystem.css';

const ERPDesignSystem = () => {
  const neutralColors = [
    { name: 'White', value: '#FFFFFF', variable: 'white' },
    { name: 'Black', value: '#000000', variable: 'black' },
  ];

  const grayColors = [
    { name: 'gray-50', value: '#F8F8F8', variable: 'gray-50' },
    { name: 'gray-100', value: '#F3F3F3', variable: 'gray-100' },
    { name: 'gray-200', value: '#EDEDED', variable: 'gray-200' },
    { name: 'gray-300', value: '#E2E2E2', variable: 'gray-300' },
    { name: 'gray-400', value: '#C7C7C7', variable: 'gray-400' },
    { name: 'gray-500', value: '#9F9F9F', variable: 'gray-500' },
    { name: 'gray-600', value: '#7C7C7C', variable: 'gray-600' },
    { name: 'gray-700', value: '#585858', variable: 'gray-700' },
    { name: 'gray-800', value: '#383838', variable: 'gray-800' },
    { name: 'gray-900', value: '#171717', variable: 'gray-900' },
  ];

  const blueColors = [
    { name: 'blue-50', value: '#F2F8FC', variable: 'blue-50' },
    { name: 'blue-100', value: '#E7F1FB', variable: 'blue-100' },
    { name: 'blue-200', value: '#C6E0F5', variable: 'blue-200' },
    { name: 'blue-300', value: '#97C7F0', variable: 'blue-300' },
    { name: 'blue-400', value: '#63ACEB', variable: 'blue-400' },
    { name: 'blue-500', value: '#2F93E7', variable: 'blue-500' },
    { name: 'blue-600', value: '#0078D0', variable: 'blue-600' },
    { name: 'blue-700', value: '#0067C6', variable: 'blue-700' },
    { name: 'blue-800', value: '#0050A3', variable: 'blue-800' },
    { name: 'blue-900', value: '#004880', variable: 'blue-900' },
  ];

  const greenColors = [
    { name: 'green-50', value: '#F1FBF6', variable: 'green-50' },
    { name: 'green-100', value: '#DCF4E8', variable: 'green-100' },
    { name: 'green-200', value: '#BFE7D2', variable: 'green-200' },
    { name: 'green-300', value: '#93D1B7', variable: 'green-300' },
    { name: 'green-400', value: '#68B99B', variable: 'green-400' },
    { name: 'green-500', value: '#3FA07F', variable: 'green-500' },
    { name: 'green-600', value: '#2F8A6C', variable: 'green-600' },
    { name: 'green-700', value: '#227F5E', variable: 'green-700' },
    { name: 'green-800', value: '#1C6F4C', variable: 'green-800' },
    { name: 'green-900', value: '#173E3C', variable: 'green-900' },
  ];

  const redColors = [
    { name: 'red-50', value: '#FFF1F1', variable: 'red-50' },
    { name: 'red-100', value: '#FEE7E7', variable: 'red-100' },
    { name: 'red-200', value: '#FDD0D0', variable: 'red-200' },
    { name: 'red-300', value: '#FBA2A2', variable: 'red-300' },
    { name: 'red-400', value: '#F77B7B', variable: 'red-400' },
    { name: 'red-500', value: '#F05353', variable: 'red-500' },
    { name: 'red-600', value: '#DC3636', variable: 'red-600' },
    { name: 'red-700', value: '#C92A2A', variable: 'red-700' },
    { name: 'red-800', value: '#A41F1F', variable: 'red-800' },
    { name: 'red-900', value: '#8E1515', variable: 'red-900' },
  ];

  const amberColors = [
    { name: 'amber-50', value: '#FFF8E6', variable: 'amber-50' },
    { name: 'amber-100', value: '#FFF1CC', variable: 'amber-100' },
    { name: 'amber-200', value: '#FFE299', variable: 'amber-200' },
    { name: 'amber-300', value: '#FFD166', variable: 'amber-300' },
    { name: 'amber-400', value: '#FFC233', variable: 'amber-400' },
    { name: 'amber-500', value: '#FFB300', variable: 'amber-500' },
    { name: 'amber-600', value: '#CC8F00', variable: 'amber-600' },
    { name: 'amber-700', value: '#996B00', variable: 'amber-700' },
    { name: 'amber-800', value: '#664700', variable: 'amber-800' },
    { name: 'amber-900', value: '#332300', variable: 'amber-900' },
  ];

  const activityColors = [
    { name: 'process', value: '#C6C6C6', variable: 'process' },
    { name: 'success', value: '#1CC55F', variable: 'success' },
    { name: 'fail', value: '#F72B2B', variable: 'fail' },
    { name: 'pend', value: '#FFF000', variable: 'pend' },
  ];

  const actColors = [
    { name: 'mineral', value: '#D9C234', variable: 'mineral' },
    { name: 'tan', value: '#C43B02', variable: 'tan' },
    { name: 'teal', value: '#047B84', variable: 'teal' },
    { name: 'plum', value: '#9A3A8E', variable: 'plum' },
    { name: 'blush', value: '#E0467D', variable: 'blush' },
    { name: 'salmon', value: '#F07A70', variable: 'salmon' },
    { name: 'sky', value: '#93B0D5', variable: 'sky' },
    { name: 'teal-blue', value: '#339B8A', variable: 'teal-blue' },
    { name: 'orange', value: '#FF972E', variable: 'orange' },
    { name: 'pepper', value: '#E82B19', variable: 'pepper' },
    { name: 'navy', value: '#1370E4', variable: 'navy' },
    { name: 'vow', value: '#BC5CF0', variable: 'vow' },
    { name: 'barbie', value: '#FF2D8E', variable: 'barbie' },
    { name: 'splash', value: '#FFE133', variable: 'splash' },
    { name: 'tine', value: '#1F8B8C', variable: 'tine' },
    { name: 'blow', value: '#0076B2', variable: 'blow' },
    { name: 'tangerine', value: '#FF8F2B', variable: 'tangerine' },
    { name: 'grind', value: '#28D82E', variable: 'grind' },
    { name: 'leaf', value: '#31D420', variable: 'leaf' },
  ];

  const whiteOverlays = [
    { name: 'white-50', value: '#FFFFFF', opacity: '5%', variable: 'white-50' },
    {
      name: 'white-100',
      value: '#FFFFFF',
      opacity: '10%',
      variable: 'white-100',
    },
    {
      name: 'white-200',
      value: '#FFFFFF',
      opacity: '20%',
      variable: 'white-200',
    },
    {
      name: 'white-300',
      value: '#FFFFFF',
      opacity: '30%',
      variable: 'white-300',
    },
    {
      name: 'white-400',
      value: '#FFFFFF',
      opacity: '40%',
      variable: 'white-400',
    },
    {
      name: 'white-500',
      value: '#FFFFFF',
      opacity: '50%',
      variable: 'white-500',
    },
    {
      name: 'white-600',
      value: '#FFFFFF',
      opacity: '60%',
      variable: 'white-600',
    },
    {
      name: 'white-700',
      value: '#FFFFFF',
      opacity: '70%',
      variable: 'white-700',
    },
    {
      name: 'white-800',
      value: '#FFFFFF',
      opacity: '80%',
      variable: 'white-800',
    },
    {
      name: 'white-900',
      value: '#FFFFFF',
      opacity: '90%',
      variable: 'white-900',
    },
  ];

  const blackOverlays = [
    { name: 'black-50', value: '#000000', opacity: '5%', variable: 'black-50' },
    {
      name: 'black-100',
      value: '#000000',
      opacity: '10%',
      variable: 'black-100',
    },
    {
      name: 'black-200',
      value: '#000000',
      opacity: '20%',
      variable: 'black-200',
    },
    {
      name: 'black-300',
      value: '#000000',
      opacity: '30%',
      variable: 'black-300',
    },
    {
      name: 'black-400',
      value: '#000000',
      opacity: '40%',
      variable: 'black-400',
    },
    {
      name: 'black-500',
      value: '#000000',
      opacity: '50%',
      variable: 'black-500',
    },
    {
      name: 'black-600',
      value: '#000000',
      opacity: '60%',
      variable: 'black-600',
    },
    {
      name: 'black-700',
      value: '#000000',
      opacity: '70%',
      variable: 'black-700',
    },
    {
      name: 'black-800',
      value: '#000000',
      opacity: '80%',
      variable: 'black-800',
    },
    {
      name: 'black-900',
      value: '#000000',
      opacity: '90%',
      variable: 'black-900',
    },
  ];

  const typographyData = [
    {
      name: 'Head H8',
      sizes: ['88px'],
      weights: ['Regular', 'Medium', 'Semibold', 'Bold'],
    },
    {
      name: 'Head H7',
      sizes: ['80px'],
      weights: ['Regular', 'Medium', 'Semibold', 'Bold', 'Black'],
    },
    {
      name: 'Head H6',
      sizes: ['72px'],
      weights: ['Regular', 'Medium', 'Semibold', 'Bold', 'Black'],
    },
    {
      name: 'Head H5',
      sizes: ['64px'],
      weights: ['Regular', 'Medium', 'Semibold', 'Bold', 'Black'],
    },
    {
      name: 'Head H4',
      sizes: ['56px'],
      weights: ['Regular', 'Medium', 'Semibold', 'Bold', 'Black'],
    },
    {
      name: 'Head H3',
      sizes: ['52px'],
      weights: ['Regular', 'Medium', 'Semibold', 'Bold', 'Black'],
    },
    {
      name: 'Head H2',
      sizes: ['48px'],
      weights: ['Regular', 'Medium', 'Semibold', 'Bold', 'Black'],
    },
    {
      name: 'Head H1',
      sizes: ['44px'],
      weights: ['Regular', 'Medium', 'Semibold', 'Bold', 'Black'],
    },
    {
      name: 'Text T6',
      sizes: ['44px'],
      weights: ['Regular', 'Medium', 'Semibold', 'Bold', 'Black'],
    },
    {
      name: 'Text T5',
      sizes: ['40px'],
      weights: ['Regular', 'Medium', 'Semibold', 'Bold', 'Black'],
    },
    {
      name: 'Text T4',
      sizes: ['32px'],
      weights: ['Regular', 'Medium', 'Semibold', 'Bold', 'Black'],
    },
    {
      name: 'Text T3',
      sizes: ['28px'],
      weights: ['Regular', 'Medium', 'Semibold', 'Bold', 'Black'],
    },
    {
      name: 'Text T2',
      sizes: ['26px'],
      weights: ['Regular', 'Medium', 'Semibold', 'Bold', 'Black'],
    },
    {
      name: 'Bold B8',
      sizes: ['24px'],
      weights: ['Regular', 'Medium', 'Semibold', 'Bold', 'Black'],
    },
    {
      name: 'Bold B7',
      sizes: ['20px'],
      weights: ['Regular', 'Medium', 'Semibold', 'Bold', 'Black'],
    },
    {
      name: 'Bold B6',
      sizes: ['18px'],
      weights: ['Regular', 'Medium', 'Semibold', 'Bold', 'Black'],
    },
    {
      name: 'Bold B5',
      sizes: ['16px'],
      weights: ['Regular', 'Medium', 'Semibold', 'Bold', 'Black'],
    },
    {
      name: 'Bold B4',
      sizes: ['14px'],
      weights: ['Regular', 'Medium', 'Semibold', 'Bold', 'Black'],
    },
    {
      name: 'Bold B3',
      sizes: ['13px'],
      weights: ['Regular', 'Medium', 'Semibold', 'Bold', 'Black'],
    },
    {
      name: 'Bold B2',
      sizes: ['12px'],
      weights: ['Regular', 'Medium', 'Semibold', 'Bold', 'Black'],
    },
    {
      name: 'Bold B1',
      sizes: ['11px'],
      weights: ['Regular', 'Medium', 'Semibold', 'Bold', 'Black'],
    },
  ];

  const buttonVariants = [
    {
      name: 'Button Solid',
      variant: 'btn-solid',
      theme: 'btn-dark',
      usage: 'Primary action',
    },
    {
      name: 'Button Outline',
      variant: 'btn-outline',
      theme: 'btn-dark',
      usage: 'Secondary action',
    },
    {
      name: 'Button Ghost',
      variant: 'btn-ghost',
      theme: 'btn-dark',
      usage: 'Subtle action',
    },
  ];

  const iconSet = [
    { name: 'Pin', src: '/public/assets/icons/erp/Pin_16.png' },
    {
      name: 'Clipboard',
      src: '/public/assets/icons/erp/Property 1=clipboard_drk.png',
    },
    { name: 'Folder', src: '/public/assets/icons/erp/Group.png' },
    {
      name: 'Caption',
      src: '/public/assets/icons/erp/Property 1=closed-caption_drk.png',
    },
    {
      name: 'Collection',
      src: '/public/assets/icons/erp/Property 1=collection_drk.png',
    },
    {
      name: 'Highlighter',
      src: '/public/assets/icons/erp/Property 1=highlighter_drk.png',
    },
    {
      name: 'Information',
      src: '/public/assets/icons/erp/Property 1=information_drk.png',
    },
    {
      name: 'Page',
      src: '/public/assets/icons/erp/Property 1=page-vertical_drk.png',
    },
  ];

  const componentsList = [
    {
      name: 'Button',
      description: 'Multiple variants for different actions and priorities',
    },
    {
      name: 'Input Field',
      description: 'Text, number, email, password with validation states',
    },
    {
      name: 'Select Dropdown',
      description: 'Native and custom dropdown with search',
    },
    { name: 'Checkbox', description: 'Indeterminate state available' },
    {
      name: 'Radio Button',
      description: 'Group selection for mutually exclusive options',
    },
    { name: 'Toggle Switch', description: 'For binary settings' },
    { name: 'Modal', description: 'Dialog for confirmations and forms' },
    { name: 'Table', description: 'Sortable, filterable data table' },
    { name: 'Card', description: 'Container for content with elevation' },
    { name: 'Tabs', description: 'Organize content in sections' },
  ];

  const uiImages = [
    {
      id: 1,
      src: '/public/assets/ui/erp/ui.home.png',
      alt: 'UI Design - Dashboard Overview',
    },
    {
      id: 2,
      src: '/public/assets/ui/erp/ui.dashboard.png',
      alt: 'UI Design - User Management',
    },
    {
      id: 3,
      src: '/public/assets/ui/erp/ui.workplace.png',
      alt: 'UI Design - Analytics Dashboard',
    },
    {
      id: 4,
      src: '/public/assets/ui/erp/ui.workplace.following.png',
      alt: 'UI Design - Settings Panel',
    },
  ];

  return (
    <div id="notebook-paper">
      <div className="texture-overlay"></div>
      <div className="vertical-line"></div>
      <div className="horizontal-lines"></div>

      <div className="holes">
        <div className="hole"></div>
        <div className="hole"></div>
        <div className="hole"></div>
      </div>

      <div className="case-study-container">
        <div className="case-study-hero">
          <div className="case-study-title-wrapper">
            <h1 className="case-study-title">ERP Design System</h1>
            <div className="case-study-subtitle">
              Building a Scalable Foundation for Enterprise Software
            </div>
            <div className="title-underlines">
              <svg viewBox="0 0 300 12">
                <path
                  d="M5,8 Q50,14 100,8 Q150,2 200,8 Q250,14 295,9"
                  stroke="var(--text)"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M8,9.5 Q53,15.5 103,9.5 Q148,4 198,9.5 Q248,15.5 292,10.5"
                  stroke="var(--text)"
                  strokeWidth="0.9"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </div>
          </div>
          <p className="case-study-description">
            A comprehensive design system from scratch for a complex ERP
            software — including colors, typography, icons, buttons, and core
            components.
          </p>
        </div>

        <section className="case-section">
          <h2 className="section-title">1. Executive Summary</h2>
          <div className="section-divider">
            <svg viewBox="0 0 200 6">
              <path
                d="M2,3 Q50,1 100,4 Q150,6 198,2"
                stroke="var(--text)"
                strokeWidth="0.8"
                fill="none"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </div>
          <div className="section-content">
            <p>
              <strong>Project Overview:</strong> This case study documents the
              creation of a comprehensive design system from scratch for an
              enterprise ERP software. The goal was to establish a unified
              visual language that scales across 50+ modules, serving thousands
              of daily users.
            </p>
            <p>
              <strong>The Challenge:</strong> ERP software is inherently
              complex, with dense data tables, numerous forms, and critical
              workflows. The existing UI was inconsistent, lacked accessibility,
              and made onboarding new features difficult and slow.
            </p>
            <p>
              <strong>The Solution:</strong> A modular, atomic design system
              built around core foundations (color, typography, spacing) and a
              library of reusable components. This system reduced UI development
              time by 60% and ensured a consistent user experience across the
              entire platform.
            </p>
          </div>
        </section>

        <section className="case-section">
          <h2 className="section-title">2. Problem Statement & Hypothesis</h2>
          <div className="section-divider">
            <svg viewBox="0 0 200 6">
              <path
                d="M2,3 Q50,1 100,4 Q150,6 198,2"
                stroke="var(--text)"
                strokeWidth="0.8"
                fill="none"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </div>
          <div className="section-content">
            <p>
              <strong>The Problem:</strong> Without a design system, the ERP's
              UI suffered from visual inconsistencies, fragmented user
              experiences, and inefficient design-to-development handoffs.
              Developers were rebuilding common components each time, leading to
              technical debt and accessibility issues.
            </p>
            <p>
              <strong>The Hypothesis:</strong> A centralized, well-documented
              design system will create a shared language between design and
              engineering, drastically improve development efficiency, and
              deliver a cohesive, accessible experience for enterprise users.
            </p>
          </div>
        </section>

        <section className="case-section">
          <h2 className="section-title">
            3. Design Foundations: Color Palette
          </h2>
          <div className="section-divider">
            <svg viewBox="0 0 200 6">
              <path
                d="M2,3 Q50,1 100,4 Q150,6 198,2"
                stroke="var(--text)"
                strokeWidth="0.8"
                fill="none"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </div>
          <div className="section-content">
            <p>
              A semantic color system designed for clarity, hierarchy, and
              accessibility across enterprise modules.
            </p>

            <h3 className="color-subtitle">Neutral</h3>
            <div className="color-grid">
              {neutralColors.map((color) => (
                <div key={color.name} className="color-card">
                  <div
                    className="color-swatch"
                    style={{
                      backgroundColor: color.value,
                      border:
                        color.value === '#FFFFFF' ? '1px solid #ddd' : 'none',
                    }}
                  ></div>
                  <div className="color-info">
                    <div className="color-name">{color.name}</div>
                    <div className="color-value">{color.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="color-subtitle">Gray</h3>
            <div className="color-grid">
              {grayColors.map((color) => (
                <div key={color.name} className="color-card">
                  <div
                    className="color-swatch"
                    style={{ backgroundColor: color.value }}
                  ></div>
                  <div className="color-info">
                    <div className="color-name">{color.name}</div>
                    <div className="color-value">{color.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="color-subtitle">Blue (Information)</h3>
            <div className="color-grid">
              {blueColors.map((color) => (
                <div key={color.name} className="color-card">
                  <div
                    className="color-swatch"
                    style={{ backgroundColor: color.value }}
                  ></div>
                  <div className="color-info">
                    <div className="color-name">{color.name}</div>
                    <div className="color-value">{color.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="color-subtitle">Green (Success)</h3>
            <div className="color-grid">
              {greenColors.map((color) => (
                <div key={color.name} className="color-card">
                  <div
                    className="color-swatch"
                    style={{ backgroundColor: color.value }}
                  ></div>
                  <div className="color-info">
                    <div className="color-name">{color.name}</div>
                    <div className="color-value">{color.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="color-subtitle">Red (Error)</h3>
            <div className="color-grid">
              {redColors.map((color) => (
                <div key={color.name} className="color-card">
                  <div
                    className="color-swatch"
                    style={{ backgroundColor: color.value }}
                  ></div>
                  <div className="color-info">
                    <div className="color-name">{color.name}</div>
                    <div className="color-value">{color.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="color-subtitle">Amber (Warning)</h3>
            <div className="color-grid">
              {amberColors.map((color) => (
                <div key={color.name} className="color-card">
                  <div
                    className="color-swatch"
                    style={{ backgroundColor: color.value }}
                  ></div>
                  <div className="color-info">
                    <div className="color-name">{color.name}</div>
                    <div className="color-value">{color.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="color-subtitle">Activity Colors</h3>
            <div className="color-grid">
              {activityColors.map((color) => (
                <div key={color.name} className="color-card">
                  <div
                    className="color-swatch"
                    style={{ backgroundColor: color.value }}
                  ></div>
                  <div className="color-info">
                    <div className="color-name">{color.name}</div>
                    <div className="color-value">{color.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="color-subtitle">Act Colors</h3>
            <div className="color-grid">
              {actColors.map((color) => (
                <div key={color.name} className="color-card">
                  <div
                    className="color-swatch"
                    style={{ backgroundColor: color.value }}
                  ></div>
                  <div className="color-info">
                    <div className="color-name">{color.name}</div>
                    <div className="color-value">{color.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="color-subtitle">White Overlays</h3>
            <div className="color-grid">
              {whiteOverlays.map((color) => (
                <div key={color.name} className="color-card">
                  <div
                    className="color-swatch"
                    style={{
                      backgroundColor: color.value,
                      opacity: parseFloat(color.opacity) / 100,
                    }}
                  ></div>
                  <div className="color-info">
                    <div className="color-name">{color.name}</div>
                    <div className="color-value">
                      {color.value} ({color.opacity})
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="color-subtitle">Black Overlays</h3>
            <div className="color-grid">
              {blackOverlays.map((color) => (
                <div key={color.name} className="color-card">
                  <div
                    className="color-swatch"
                    style={{
                      backgroundColor: color.value,
                      opacity: parseFloat(color.opacity) / 100,
                    }}
                  ></div>
                  <div className="color-info">
                    <div className="color-name">{color.name}</div>
                    <div className="color-value">
                      {color.value} ({color.opacity})
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section">
          <h2 className="section-title">4. Design Foundations: Typography</h2>
          <div className="section-divider">
            <svg viewBox="0 0 200 6">
              <path
                d="M2,3 Q50,1 100,4 Q150,6 198,2"
                stroke="var(--text)"
                strokeWidth="0.8"
                fill="none"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </div>
          <div className="section-content">
            <p>
              Inter typeface chosen for its readability and modern appearance
              across all screen sizes.
            </p>
            <div className="typography-grid-new">
              {typographyData.map((type) => (
                <div key={type.name} className="typography-card-new">
                  <div className="typography-header">
                    <span className="typography-name-new">{type.name}</span>
                    <span className="typography-size">{type.sizes[0]}</span>
                  </div>
                  <div className="typography-weights">
                    {type.weights.map((weight) => (
                      <div
                        key={weight}
                        className="weight-demo"
                        style={{
                          fontWeight:
                            weight === 'Regular'
                              ? 400
                              : weight === 'Medium'
                                ? 500
                                : weight === 'Semibold'
                                  ? 600
                                  : weight === 'Bold'
                                    ? 700
                                    : 900,
                        }}
                      >
                        {weight}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section">
          <h2 className="section-title">5. Icon Set</h2>
          <div className="section-divider">
            <svg viewBox="0 0 200 6">
              <path
                d="M2,3 Q50,1 100,4 Q150,6 198,2"
                stroke="var(--text)"
                strokeWidth="0.8"
                fill="none"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </div>
          <div className="section-content">
            <p>
              Custom-designed, consistent icon set for all navigation actions
              and status indicators.
            </p>
            <div className="icons-grid">
              {iconSet.map((icon) => (
                <div key={icon.name} className="icon-card">
                  <img src={icon.src} alt={icon.name} className="icon-image" />
                  <span className="icon-name">{icon.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <section className="case-section">
          <h2 className="section-title">6. Button Variants</h2>
          <div className="section-divider">
            <svg viewBox="0 0 200 6">
              <path
                d="M2,3 Q50,1 100,4 Q150,6 198,2"
                stroke="var(--text)"
                strokeWidth="0.8"
                fill="none"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </div>
          <div className="section-content">
            <p>
              Button styles designed for clear action hierarchy and consistent
              interactive states.
            </p>
            <div className="buttons-preview">
              {buttonVariants.map((btn) => (
                <div key={btn.name} className="button-demo">
                  <button className={`demo-btn ${btn.variant} ${btn.theme}`}>
                    {btn.name}
                  </button>
                  <span className="button-usage">{btn.usage}</span>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        <section className="case-section">
          <h2 className="section-title">7. Core Components</h2>
          <div className="section-divider">
            <svg viewBox="0 0 200 6">
              <path
                d="M2,3 Q50,1 100,4 Q150,6 198,2"
                stroke="var(--text)"
                strokeWidth="0.8"
                fill="none"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </div>
          <div className="section-content">
            <p>
              Reusable, accessible components that form the building blocks of
              the ERP interface.
            </p>
            <div className="components-grid">
              {componentsList.map((comp) => (
                <div key={comp.name} className="component-card">
                  <div className="component-name">{comp.name}</div>
                  <div className="component-description">
                    {comp.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section">
          <h2 className="section-title">8. UI Flow: User Management</h2>
          <div className="section-divider">
            <svg viewBox="0 0 200 6">
              <path
                d="M2,3 Q50,1 100,4 Q150,6 198,2"
                stroke="var(--text)"
                strokeWidth="0.8"
                fill="none"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </div>
          <div className="flow-description">
            <p>
              The user management flow demonstrates how the design system
              components work together. It includes user listing with sortable
              tables, role assignment using dropdowns, permission toggles, and
              form validation. The consistent use of buttons, inputs, and
              notifications creates a predictable and efficient experience for
              administrators.
            </p>
          </div>
          <div className="flow-image-container">
            <img
              src="/assets/flow/erp/erp-flow.png"
              alt="ERP UI Flow Diagram"
              className="flow-image"
            />
          </div>
        </section>

        <section className="case-section">
          <h2 className="section-title">9. UI Designs</h2>
          <div className="section-divider">
            <svg viewBox="0 0 200 6">
              <path
                d="M2,3 Q50,1 100,4 Q150,6 198,2"
                stroke="var(--text)"
                strokeWidth="0.8"
                fill="none"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </div>
          <div className="images-grid">
            {uiImages.map((ui) => (
              <div key={ui.id} className="image-item">
                <div className="image-number-wrapper">
                  <svg className="image-hand-drawn-circle" viewBox="0 0 60 60">
                    <path
                      d="M30,5 Q50,8 52,30 Q54,52 30,55 Q8,52 5,30 Q3,8 30,5"
                      stroke="var(--text)"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.6"
                    />
                    <path
                      d="M30,7 Q48,10 50,30 Q52,50 30,53 Q10,50 7,30 Q5,10 30,7"
                      stroke="var(--text)"
                      strokeWidth="0.8"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.4"
                    />
                  </svg>
                  <span className="image-number">{ui.id}</span>
                </div>
                <img src={ui.src} alt={ui.alt} className="image-frame" />
              </div>
            ))}
          </div>
        </section>

        <section className="case-section">
          <h2 className="section-title">10. Business Impact & Conclusion</h2>
          <div className="section-divider">
            <svg viewBox="0 0 200 6">
              <path
                d="M2,3 Q50,1 100,4 Q150,6 198,2"
                stroke="var(--text)"
                strokeWidth="0.8"
                fill="none"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </div>
          <div className="section-content">
            <p>
              The ERP Design System has transformed how our product is built and
              experienced. Development speed increased by 60%, and design
              consistency across 50+ modules reached 95%.
            </p>
            <p>
              <strong>Final Reflection:</strong> Building a design system from
              scratch for a complex ERP was challenging but immensely rewarding.
              The key success factors were investing in a solid foundation
              (colors, typography, spacing), maintaining close collaboration
              with engineering, and continuously iterating based on user
              feedback. The design system is now the single source of truth for
              our entire product ecosystem.
            </p>
            <div className="conclusion-squiggle">
              <svg viewBox="0 0 300 20">
                <path
                  d="M10,10 Q75,16 150,10 Q225,4 290,10"
                  stroke="var(--text)"
                  strokeWidth="0.8"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.5"
                />
                <path
                  d="M12,11 Q77,17 152,11 Q227,5 288,11"
                  stroke="var(--text)"
                  strokeWidth="0.5"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.3"
                />
              </svg>
            </div>
            <div className="figma-button-wrapper">
              <a
                href="https://www.figma.com/design/jawrp59GM1oAzwxqDOH58B/ERP-Design-System?node-id=136-4260&t=DM0DmpcHJnVBFYOr-1"
                target="_blank"
                rel="noopener noreferrer"
                className="figma-hand-drawn-btn"
              >
                <span className="figma-btn-icon">🎨</span>
                <span className="figma-btn-text">View in Figma</span>
                <svg className="figma-btn-arrow" viewBox="0 0 24 24">
                  <path
                    d="M5,12 L19,12 M14,7 L19,12 L14,17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ERPDesignSystem;
