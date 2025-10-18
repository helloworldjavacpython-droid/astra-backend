/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			navy: '#0F172A',
  			'panel-bg': '#1E293B',
  			'text-cool': '#E2E8F0',
  			subtext: '#94A3B8',
  			'red-emergency': '#EF4444',
  			'orange-fire': '#F97316',
  			'yellow-flood': '#FACC15',
  			'blue-rescue': '#3B82F6',
  			'alert-critical': '#EF4444',
  			'alert-warning': '#F59E0B',
  			'alert-info': '#3B82F6',
  			'alert-success': '#10B981',
  			'resource-available': '#10B981',
  			'resource-deployed': '#3B82F6',
  			'resource-maintenance': '#F59E0B',
  			'training-active': '#10B981',
  			'training-new': '#3B82F6',
  			'training-expired': '#EF4444',
  			'ticket-open': '#EF4444',
  			'ticket-in-progress': '#F59E0B',
  			'ticket-resolved': '#10B981',
  			'toggle-on': '#10B981',
  			'toggle-off': '#6B7280',
  			'chart-low': '#60A5FA',
  			'chart-medium': '#10B981',
  			'chart-high': '#F59E0B',
  			'chart-critical': '#EF4444',
  			'tutorial-getting-started': '#3B82F6',
  			'tutorial-incident-management': '#EF4444',
  			'tutorial-reporting': '#F59E0B',
  			'tutorial-communication': '#10B981',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			spaceGrotesk: [
  				'Space Grotesk',
  				'sans-serif'
  			],
  			inter: [
  				'Inter',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			xl: '1rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		backdropBlur: {
  			'14': '14px'
  		},
  		keyframes: {
  			pulseGlow: {
  				'0%': {
  					boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.7)'
  				},
  				'70%': {
  					boxShadow: '0 0 0 10px rgba(255, 255, 255, 0)'
  				},
  				'100%': {
  					boxShadow: '0 0 0 0 rgba(255, 255, 255, 0)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};