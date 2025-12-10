# Course Project: Responsive One-Page Company Website

## About the Project

This project is a course assignment representing a responsive one-page website for a fictional company. The site is built using the mobile-first approach. The goal was to practice modern layout techniques, responsiveness, and basic interactivity with JavaScript.

## Features

### Layout & Styling:

- HTML5 + SCSS (SASS)— structure and styling using a CSS preprocessor.
- Flexbox and CSS Grid— for creating flexible, responsive layouts.
- Inline SVG icons— added directly into the code for styling flexibility.
- Smooth transitions— used on images and interactive elements.
### Responsiveness:

- Mobile-first strategy— prioritizes mobile device layout.
- Media queries— for adapting the site to tablets and desktops.
- Responsive burger menu— toggles on smaller screens.
### JavaScript Functionality:

- Burger menu toggle— opens/closes the menu and locks page scroll.
- Clickable images in the “Team” section— expand when clicked.
- Interactive “About Us” section— images toggle an active state.
- Scroll-based header behavior— adds styling to header after scrolling 500px.
### Build Tools:

The project uses Parcelas a bundler:

- Automatically rebuilds and refreshes the site on file changes.
- Supports SCSS and image imports.
- Great for local development.
## Project Structure
```csharp
src/
├─ scripts/                  # JS code for operation
│  └─ main.js
├─ styles/                   # Styles of individual project blocks
│  ├─ amazing-block.scss
│  ├─ clients-block.scss
│  ├─ footer-block.scss
│  ├─ footer.scss
│  ├─ header.scss
│  ├─ hero-block.scss
│  ├─ icons-block.scss
│  ├─ latest-block.scss
│  ├─ our-stories-block.scss
│  ├─ reset.scss
│  ├─ review-block.scss
│  ├─ service-block.scss
│  ├─ some-block.scss
│  ├─ stats-block.scss
│  ├─ story-block.scss
│  ├─ style.scss
│  ├─ team-block.scss
│  └─ unique-block.scss
├─ index.html                  # HTML code for a single-page application
.gitignore
package-lock.json
package.json
```
## Technologies

- HTML5
- CSS3 / SCSS (SASS)
- Vanilla JavaScript
- Flexbox / Grid
- Parcel v2
- Responsive Web Design
## Getting Started

Install dependencies:
```bash
npm install
```
Run the project:
```bash
npm run dev
```
Open in your browser:
```bash
http://localhost:1234
```


# Курсовой проект: Одностраничный адаптивный сайт компании

## О проекте

Этот проект — курсовая работа, представляющая собой адаптивный одностраничный сайт условной компании. Сайт выполнен по принципу mobile-first. Цель — отработка современной верстки, адаптации под разные устройства и добавление базовой интерактивности с помощью JavaScript.

## Что реализовано

### Верстка и стилизация:

- HTML5 + SCSS (SASS) — структура сайта и стилизация с использованием препроцессора.
- Flexbox и CSS Grid — для построения гибких и адаптивных макетов.
- SVG-иконки — вставлены в код, что даёт возможность стилизовать их.
- Плавные анимации (transition) — на изображениях и интерактивных элементах.
### Адаптивность:
- Mobile-first подход — приоритет мобильной версии.
- Media queries — адаптация под планшеты и десктопы.
- Адаптивное бургер-меню— появляется и скрывается по клику.
### JavaScript-функциональность:

- Открытие/закрытие бургер-меню + блокировка прокрутки страницы.
- Кликабельные изображения в секции “Team” — при нажатии раскрываются.
- Интерактивная секция "О нас" — изображения активируются по клику.
- Изменение шапки при скролле— появляется тень/стиль при прокрутке.
### Сборка и инструменты:

Использован Parcel как сборщик проекта:

- Автоматическая сборка и обновление проекта при изменениях.
- Поддержка SCSS и работы с изображениями.
- Удобная локальная разработка.
## Структура проекта
```csharp
src/
├─ scripts/                  # JS код необходимый для функционирования
│  └─ main.js
├─ styles/                   # Стили отдельных блоков проекта
│  ├─ amazing-block.scss
│  ├─ clients-block.scss
│  ├─ footer-block.scss
│  ├─ footer.scss
│  ├─ header.scss
│  ├─ hero-block.scss
│  ├─ icons-block.scss
│  ├─ latest-block.scss
│  ├─ our-stories-block.scss
│  ├─ reset.scss
│  ├─ review-block.scss
│  ├─ service-block.scss
│  ├─ some-block.scss
│  ├─ stats-block.scss
│  ├─ story-block.scss
│  ├─ style.scss
│  ├─ team-block.scss
│  └─ unique-block.scss
├─ index.html                  # HTML код одностраничного сайта
.gitignore
package-lock.json
package.json
```

## Технологии

- HTML5
- CSS3 / SCSS (SASS)
- JavaScript (Vanilla JS)
- Flexbox / Grid
- Parcel (v2)
- Адаптивный дизайн
## Запуск проекта

Установи зависимости:
```bash
npm install
```
Запусти проект:
```bash
npm run dev

```
Перейди в браузер по адресу:
```bash
http://localhost:1234
```
