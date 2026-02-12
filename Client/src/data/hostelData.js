
export const hostels = [
    {
        id: 1,
        name: "New Baneshwor Boys Hostel",
        location: "Baneshwor, Near IOE Pulchowk",
        price: 8500,
        gender: "Boys Only", // type -> gender
        rating: 4.5,
        reviewCount: 23, // reviews -> reviewCount
        verified: true,
        availableCount: 2, // available string -> number
        amenities: ["WiFi", "Mess", "Hot Water", "Study Room"], // features -> amenities
        image: "https://images.unsplash.com/photo-1559329146-807aff9ff1fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwbW9kZXJufGVufDF8fHx8MTc3MDI5NjkxMnww&ixlib=rb-4.1.0&q=80&w=1080",
        coordinates: { lat: 27.6915, lng: 85.3420 }, // Added mock coordinates
        description: "A comfortable and well-maintained hostel perfect for engineering students. Located in the heart of Baneshwor with easy access to IOE Pulchowk campus.",
        images: [
            "https://images.unsplash.com/photo-1559329146-807aff9ff1fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwbW9kZXJufGVufDF8fHx8MTc3MDI5NjkxMnww&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1540518614846-7eded433c457?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        ],
        ownerName: "Ram Prasad Sharma",
        ownerPhone: "+977-9841234567",
        ownerEmail: "ramsharma@example.com",
        rules: [
            "No smoking inside premises",
            "Visitors allowed till 8 PM",
            "Quiet hours: 10 PM - 6 AM",
            "Monthly payment in advance"
        ],
        nearbyPlaces: [
            "IOE Pulchowk - 5 min walk",
            "Shopping Mall - 10 min walk",
            "Hospital - 15 min walk"
        ],
        featuresDetails: [ // Renamed from features in ViewDetails to avoid conflict with simple string array
            { iconName: "Wifi", name: "High-Speed WiFi", detail: "100 Mbps" },
            { iconName: "UtensilsCrossed", name: "Mess Facility", detail: "3 meals/day" },
            { iconName: "Droplet", name: "Hot Water", detail: "24/7 available" },
            { iconName: "BookOpen", name: "Study Room", detail: "AC equipped" },
            { iconName: "Shield", name: "Security", detail: "24/7 CCTV" },
            { iconName: "Car", name: "Parking", detail: "Bike parking" },
        ]
    },
    {
        id: 2,
        name: "Kupondole Ladies Mess",
        location: "Kupondole, 5 min walk to Pulchowk",
        price: 7500,
        gender: "Girls Only",
        rating: 4.7,
        reviewCount: 18,
        verified: true,
        availableCount: 1,
        amenities: ["WiFi", "Mess", "Hot Water", "No Curfew"],
        image: "https://images.unsplash.com/photo-1568723256924-ec521428cfe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwY2l0eSUyMGhvc3RlbHxlbnwxfHx8fDE3NzAzNTcwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
        coordinates: { lat: 27.6865, lng: 85.3190 },
        description: "Safe and secure accommodation for female students with homely atmosphere. Strict security measures and quality food services.",
        images: [
            "https://images.unsplash.com/photo-1568723256924-ec521428cfe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1767800766055-1cdbd2e351b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        ],
        ownerName: "Sita Devi Shrestha",
        ownerPhone: "+977-9841234568",
        ownerEmail: "sitashrestha@example.com",
        rules: [
            "No male visitors",
            "Guests must register at reception",
            "Quiet hours: 9 PM - 6 AM",
            "Weekly room inspection"
        ],
        nearbyPlaces: [
            "Pulchowk Campus - 5 min walk",
            "Grocery Store - 3 min walk",
            "Bus Stop - 2 min walk"
        ],
        featuresDetails: [
            { iconName: "Wifi", name: "WiFi", detail: "High-speed" },
            { iconName: "UtensilsCrossed", name: "Mess", detail: "Home-style food" },
            { iconName: "Droplet", name: "Hot Water", detail: "Always available" },
            { iconName: "Clock", name: "No Curfew", detail: "Flexible timing" },
            { iconName: "Shield", name: "24/7 Security", detail: "Female guard" },
            { iconName: "BookOpen", name: "Study Area", detail: "Quiet zone" },
        ]
    },
    {
        id: 3,
        name: "Lazimpat Student Residence",
        location: "Lazimpat, Near TU Gate",
        price: 9000,
        gender: "Mixed",
        rating: 4.3,
        reviewCount: 31,
        verified: true,
        availableCount: 3,
        amenities: ["WiFi", "Self Cooking", "Hot Water", "Parking"],
        image: "https://images.unsplash.com/photo-1601062224947-3ca636754fb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXBhbCUyMGthdGhtYW5kdSUyMGJ1aWxkaW5nJTIwaG9zdGVsfGVufDF8fHx8MTc3MDM1NzAzNHww&ixlib=rb-4.1.0&q=80&w=1080",
        coordinates: { lat: 27.7215, lng: 85.3180 },
        description: "Modern student residence with separate wings for boys and girls. Perfect for TU students with all modern amenities.",
        images: [
            "https://images.unsplash.com/photo-1601062224947-3ca636754fb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        ],
        ownerName: "Dinesh Kumar Rai",
        ownerPhone: "+977-9841234569",
        ownerEmail: "dineshrai@example.com",
        rules: [
            "Inter-wing visits not allowed after 7 PM",
            "Rent due by 5th of every month",
            "One month advance deposit",
            "Minimum 3 months commitment"
        ],
        nearbyPlaces: [
            "TU Gate - 2 min walk",
            "Restaurants - 5 min walk",
            "Pharmacy - 7 min walk"
        ],
        featuresDetails: [
            { iconName: "Wifi", name: "WiFi", detail: "Fiber optic" },
            { iconName: "UtensilsCrossed", name: "Self Cooking", detail: "Common kitchen" },
            { iconName: "Droplet", name: "Hot Water", detail: "Solar + Electric" },
            { iconName: "Car", name: "Parking", detail: "Car & Bike" },
            { iconName: "Shield", name: "Security", detail: "Gated community" },
            { iconName: "Users", name: "Common Area", detail: "Recreation room" },
        ]
    },
    {
        id: 4,
        name: "Thamel Budget Hostel",
        location: "Thamel, Near NCCS College",
        price: 6000,
        gender: "Boys Only",
        rating: 4.0,
        reviewCount: 15,
        verified: true,
        availableCount: 4,
        amenities: ["WiFi", "Shared Kitchen", "Water 24/7"],
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcm9vbSUyMGhvc3RlbCUyMGJlZHxlbnwxfHx8fDE3NzAzNTcwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        coordinates: { lat: 27.7154, lng: 85.3123 },
        description: "Affordable accommodation in the heart of Thamel. Basic amenities with friendly environment for budget-conscious students.",
        images: [
            "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1631049035182-249067d7618e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1616594266886-0d14f7be3103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1556909114-44e3e70034e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        ],
        ownerName: "Prakash Tamang",
        ownerPhone: "+977-9841234570",
        ownerEmail: "prakashtamang@example.com",
        rules: [
            "No parties or loud music",
            "Clean your own room",
            "Visitors till 6 PM only",
            "Share electricity bill equally"
        ],
        nearbyPlaces: [
            "NCCS College - 3 min walk",
            "Thamel Market - 8 min walk",
            "ATM - 2 min walk"
        ],
        featuresDetails: [
            { iconName: "Wifi", name: "WiFi", detail: "Basic speed" },
            { iconName: "UtensilsCrossed", name: "Shared Kitchen", detail: "Gas & utensils" },
            { iconName: "Droplet", name: "Water 24/7", detail: "Tank backup" },
            { iconName: "Home", name: "Furnished", detail: "Bed & wardrobe" },
            { iconName: "Shield", name: "Security", detail: "Guard on duty" },
            { iconName: "Users", name: "Common Area", detail: "TV lounge" },
        ]
    },
    {
        id: 5,
        name: "Putalisadak Girls Hostel",
        location: "Putalisadak, Near Amrit Campus",
        price: 7800,
        gender: "Girls Only",
        rating: 4.6,
        reviewCount: 27,
        verified: true,
        availableCount: 2,
        amenities: ["WiFi", "Mess", "Hot Water", "Security"],
        image: "https://images.unsplash.com/photo-1767800766055-1cdbd2e351b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdHVkZW50JTIwYmVkcm9vbSUyMGNsZWFufGVufDF8fHx8MTc3MDM1NzA0MXww&ixlib=rb-4.1.0&q=80&w=1080",
        coordinates: { lat: 27.7050, lng: 85.3210 },
        description: "Premium girls hostel with excellent facilities and strict security. Perfect for serious students looking for a peaceful environment.",
        images: [
            "https://images.unsplash.com/photo-1767800766055-1cdbd2e351b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1616594266886-0d14f7be3103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1540518614846-7eded433c457?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        ],
        ownerName: "Maya Gurung",
        ownerPhone: "+977-9841234571",
        ownerEmail: "mayagurung@example.com",
        rules: [
            "Study hours: 7 PM - 9 PM (silent)",
            "No outside food delivery after 8 PM",
            "Monthly room cleanliness inspection",
            "Two months deposit required"
        ],
        nearbyPlaces: [
            "Amrit Campus - 3 min walk",
            "Library - 5 min walk",
            "Medical Store - 4 min walk"
        ],
        featuresDetails: [
            { iconName: "Wifi", name: "WiFi", detail: "Premium speed" },
            { iconName: "UtensilsCrossed", name: "Mess", detail: "Nutritious meals" },
            { iconName: "Droplet", name: "Hot Water", detail: "Geyser in rooms" },
            { iconName: "Shield", name: "Security", detail: "Biometric entry" },
            { iconName: "BookOpen", name: "Library", detail: "Study materials" },
            { iconName: "Users", name: "Common Room", detail: "Entertainment" },
        ]
    },
    {
        id: 6,
        name: "Lakeside Student Home",
        location: "Pokhara Lakeside, Near Prithvi Campus",
        price: 6500,
        gender: "Mixed",
        rating: 4.8,
        reviewCount: 19,
        verified: true,
        availableCount: 5,
        amenities: ["WiFi", "Mess", "Lake View", "Bike Parking"],
        image: "https://images.unsplash.com/photo-1601062224947-3ca636754fb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXBhbCUyMGthdGhtYW5kdSUyMGJ1aWxkaW5nJTIwaG9zdGVsfGVufDF8fHx8MTc3MDM1NzAzNHww&ixlib=rb-4.1.0&q=80&w=1080",
        coordinates: { lat: 28.2096, lng: 83.9595 }, // Pokhara coordinates
        description: "Beautiful lakeside accommodation with stunning views. Perfect blend of peaceful study environment and natural beauty.",
        images: [
            "https://images.unsplash.com/photo-1601062224947-3ca636754fb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        ],
        ownerName: "Binod Pokharel",
        ownerPhone: "+977-9841234572",
        ownerEmail: "binodpokharel@example.com",
        rules: [
            "Respect quiet hours",
            "Keep common areas clean",
            "Inform before bringing guests",
            "No pets allowed"
        ],
        nearbyPlaces: [
            "Prithvi Campus - 5 min walk",
            "Lakeside Market - 10 min walk",
            "Boat Station - 7 min walk"
        ],
        featuresDetails: [
            { iconName: "Wifi", name: "WiFi", detail: "High-speed fiber" },
            { iconName: "UtensilsCrossed", name: "Mess", detail: "Local cuisine" },
            { iconName: "MapPin", name: "Lake View", detail: "Mountain view" },
            { iconName: "Car", name: "Bike Parking", detail: "Covered area" },
            { iconName: "Shield", name: "Security", detail: "24/7 guard" },
            { iconName: "Users", name: "Terrace", detail: "Common space" },
        ]
    },
    {
        id: 7,
        name: "Koteshwor Boys Dorm",
        location: "Koteshwor, Kathmandu",
        price: 5500,
        gender: "Boys Only",
        rating: 3.5,
        reviewCount: 8,
        verified: false,
        availableCount: 6,
        amenities: ["WiFi", "Mess"],
        image: "https://images.unsplash.com/photo-1549492423-400259a2e574?q=80&w=800&auto=format&fit=crop",
        coordinates: { lat: 27.6756, lng: 85.3459 },
        description: "Standard accommodation in Koteshwor. Good connectivity and affordable rates for students.",
        images: ["https://images.unsplash.com/photo-1549492423-400259a2e574?q=80&w=800&auto=format&fit=crop"],
        featuresDetails: [
            { iconName: "Wifi", name: "WiFi", detail: "Available" },
            { iconName: "UtensilsCrossed", name: "Mess", detail: "2 meals" }
        ],
        ownerName: "Hari Bahadur",
        ownerPhone: "+977-9841000000",
        ownerEmail: "hari@example.com",
        rules: ["No smoking"],
        nearbyPlaces: ["Bus park - 2 min walk"]
    },
    {
        id: 8,
        name: "Sanepa Elite Hostel",
        location: "Sanepa, Lalitpur",
        price: 12000,
        gender: "Mixed",
        rating: 4.9,
        reviewCount: 56,
        verified: true,
        availableCount: 1,
        amenities: ["WiFi", "Mess", "Hot Water", "Study Room", "Gym"],
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
        coordinates: { lat: 27.6830, lng: 85.3032 },
        description: "Luxury hostel with gym and top-class amenities. Ideal for students who want a premium lifestyle.",
        images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"],
        featuresDetails: [
            { iconName: "Wifi", name: "WiFi", detail: "5G" },
            { iconName: "UtensilsCrossed", name: "Mess", detail: "Buffet" },
            { iconName: "Droplet", name: "Hot Water", detail: "Geyser" }
        ],
        ownerName: "Rajesh Hamal",
        ownerPhone: "+977-9851000000",
        ownerEmail: "rajesh@example.com",
        rules: ["No loud noise after 10PM"],
        nearbyPlaces: ["Bhatbhateni - 5 min walk"]
    }
];
