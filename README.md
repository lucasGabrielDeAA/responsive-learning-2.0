# responsive-learning 2.0

## CSS Units

Fixed layouts:
`px` - Pixels

Fluid layouts:
`%` - Percentage
`auto` - Automatic
`vh` - Viewport height
`vw` - Viewport width


Fixed texts:
`1px` -> `0.75pt`
`16px`-> `12pt`

Fluid texts:
`em` - multiplied by the father element value
`rem` - multiplied by the root element value

## Media queries

```css
  @media (max-width: 768px) {
    html {
      font-size: 50%;
    }
  }
```

## HTML media attributes with multiple css files

```html
    <link rel="stylesheet" href="style.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="print.css" media="print" />
    <link rel="stylesheet" href="responsive.css" media="screen and (max-width: 768px)" />
```

## Images