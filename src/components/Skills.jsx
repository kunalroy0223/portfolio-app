/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useMemo, useState } from 'react';
import { useTheme } from 'next-themes';
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from 'react-icon-cloud';
import '../styles/Skills.css';

const cloudProps = {
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      paddingTop: 40,
      cursor: 'pointer', // Make the cloud interactive when hovered
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: true, // Enables zoom when scrolling
    imageScale: 2,
    activeCursor: 'default',
    tooltip: 'native',
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: '#0000',
    maxSpeed: 0.04,
    minSpeed: 0.02,
    dragControl: false, // Optionally disable drag control
  },
};

const renderCustomIcon = (icon, theme) => {
  const bgHex = theme === 'light' ? '#f3f2ef' : '#080510';
  const fallbackHex = theme === 'light' ? '#6e6e73' : '#ffffff';
  const minContrastRatio = theme === 'dark' ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

const IconCloud = ({ iconSlugs = [], imageArray }) => {
  const [data, setData] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (iconSlugs.length > 0) {
      fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
    }
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;
    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || 'light')
    );
  }, [data, theme]);

  return (
    <Cloud {...cloudProps}>
      <>
        {renderedIcons}
        {imageArray &&
          imageArray.length > 0 &&
          imageArray.map((image, index) => (
            <a key={index} href="#" onClick={(e) => e.preventDefault()}>
              <img height="42" width="42" alt="A globe" src={image} />
            </a>
          ))}
      </>
    </Cloud>
  );
};

const Skills = () => {
  return (
    <section id="Skills">
      <div className="Skills-area">
<h1 style={{ textAlign: 'center', fontSize: '5rem' }}>Skills</h1>
        <ul className="Skills-circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      <div className="custom-card">
                <div className="cloud-container">
          {/* Pass in iconSlugs or imageArray as props to customize */}
          <IconCloud
            iconSlugs={[
              'react', 'nodejs', 'express', 'mongodb', 'mysql', 'java',
              'javascript', 'python', 'c', 'cplusplus', 'html5', 'css3',
              'git', 'github', 'embedded', 'opencv', 'ros', 'nav2', 'gazebo', 'moveit', 'rviz',
              'tailwindcss', 'bootstrap', 'r', 'qbasic', 'arduino'
            ]}
            imageArray={[
              'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/react.svg',
              'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/node-dot-js.svg',
              'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/express.svg',
              'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mongodb.svg',
              'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mysql.svg',
              'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/java.svg',
              'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/javascript.svg',
              'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/python.svg',
              'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/c.svg',
              'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/cplusplus.svg',
              'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/html5.svg',
              'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/css3.svg',
              'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/git.svg',
              'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg',
              'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/embedded.svg',
              'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/opencv.svg',
              'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/ros.svg',
              'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/nav2.svg',
              'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/gazebo.svg',
              'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/moveit.svg',
              'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/rviz.svg',
              'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/tailwindcss.svg',
              'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/bootstrap.svg',
              'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/r.svg',
              'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/qbasic.svg',
              'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/arduino.svg'
            ]}
          />
        </div>
      </div>
        
      </div>
    </section>
  );
};

export default Skills;
