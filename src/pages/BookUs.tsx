import { motion } from 'framer-motion';

// Service categories with service details
export const serviceCategories = [
  {
    title: "Waxing",
    services: [
      { name: "Hollywood", price: "from £35" },
      { name: "Brazilian", price: "£30" },
      { name: "Bikini", price: "£15" },
      { name: "High bikini", price: "£17" },
      { name: "Half leg", price: "£18" },
      { name: "3/4 leg", price: "from £23" },
      { name: "Full leg", price: "from £28" },
      { name: "Thigh", price: "from £22" },
      { name: "Half arm", price: "£15" },
      { name: "Full arm", price: "£22" },
      { name: "Nostrils", price: "£4" },
      { name: "Chin", price: "£7" },
      { name: "Upper lip", price: "£5" },
      { name: "Sides", price: "£8" },
      { name: "Eyebrow", price: "£10" },
      { name: "Eyebrow threading", price: "£6" },
      { name: "Lip & chin", price: "£10" },
      { name: "Half face", price: "£25" },
      { name: "Full face", price: "£30" },
      { name: "Underarm", price: "£12" },
      { name: "Peri anal", price: "£15" },
      { name: "Buttocks", price: "£20" },
      { name: "Stomach line", price: "£18" },
      { name: "Full stomach", price: "£22" },
      { name: "Full body excl face & back", price: "£130" },
      { name: "Chest", price: "£25" },
      { name: "Back", price: "£40" }
    ]
  },
  {
    title: "Tinting",
    services: [
      { name: "Eyebrow", price: "£8" },
      { name: "Eyelash", price: "£10" }
    ]
  },
  {
    title: "Hair",
    services: [
      { name: "Restyle & hair up", price: "£40" },
      { name: "Wash and blow dry", price: "from £25" },
      { name: "Curly blow dry", price: "from £25" },
      { name: "Wash cut and blow dry", price: "from £35" },
      { name: "Wash and cut", price: "from £18" },
      { name: "Dry cut", price: "from £25" },
      { name: "Full head highlights", price: "from £85" },
      { name: "Full head colour", price: "from £55" },
      { name: "Roots colour", price: "from £30" },
      { name: "T - Section", price: "from £55" },
      { name: "Balayage", price: "from £75" },
      { name: "Child's cut (under 11)", price: "£12" },
      { name: "Child's cut (11-16)", price: "from £15" },
      { name: "Braid & Style", price: "from £15" },
      { name: "Keratin treatment", price: "from £95" },
      { name: "Perm", price: "from £60" },
      { name: "Hair conditioning treatment with steam", price: "£30 / £150 (6 sessions)" },
      { name: "Extensions (1/4, 1/2, Full Head)", price: "£30/45/55" },
      { name: "Men's Haircut", price: "£20" }
    ]
  },
  {
    title: "Facials",
    services: [
      { name: "Face Brightening Herbal treatment", price: "£45" },
      { name: "Dermaplane", price: "£60" },
      { name: "Micro needling", price: "£120" },
      { name: "Deep cleansing facial", price: "from £50" },
      { name: "Pro brightening facial", price: "from £75" },
      { name: "Acne aid facial", price: "from £80" },
      { name: "Anti aging facial", price: "from £60" },
      { name: "LED Light therapy", price: "from £70" },
      { name: "Rosacea/sensitive", price: "from £65" }
    ]
  },
  {
    title: "Anti Wrinkle Treatments",
    services: [
      { name: "Crows feet", price: "£150" },
      { name: "Full forehead freeze", price: "£250" },
      { name: "Forehead and frown", price: "£180" },
      { name: "Men 1/2/3 areas", price: "£200/250/290" },
      { name: "Masseter", price: "£200" },
      { name: "Brow lift", price: "£150" }
    ]
  },
  {
    title: "Skin Boosters",
    services: [
      { name: "Profhilo", price: "£220 (two sessions £400)" },
      { name: "Seventy hyal", price: "£130 (three treatments)" },
      { name: "Lumi eyes", price: "£110 (two sessions £190, three sessions £260)" },
      { name: "Ejal 40", price: "£120" },
      { name: "Illuma luna", price: "£190" }
    ]
  },
  {
    title: "Dermal Fillers",
    services: [
      { name: "Nasolabial folds", price: "£150" },
      { name: "Lips 0.5/1ml", price: "£150/170" },
      { name: "Hyalase dissolving (per session)", price: "£130" }
    ]
  },
  {
    title: "Fat Dissolving",
    services: [
      { name: "Single session one area", price: "£200" },
      { name: "3 sessions", price: "£500" },
      { name: "360 Lipo", price: "£350/750 (single/three sessions)" },
      { name: "Double chin", price: "£180" }
    ]
  },
  {
    title: "Vitamin Therapy",
    services: [
      { name: "B12", price: "£30" },
      { name: "Vitamin C/D", price: "£30" },
      { name: "Biotin", price: "£30" }
    ]
  },
  {
    title: "Massage Therapy",
    services: [
      { name: "Swedish", price: "£60/£70 (45min/1hr)" },
      { name: "Aromatherapy", price: "£60/£70 (45min/1hr)" },
      { name: "Deep Tissue", price: "£70/80 (45min/1hr)" },
      { name: "Back, Neck & Shoulder", price: "£45 (30min)" },
      { name: "Foot Massage", price: "£30 (20min)" },
      { name: "Indian head massage", price: "£45 (30min)" }
    ]
  }
];

export default function BookUs() {
  return (
    <div className="bg-white min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gold-gradient mb-4">
            Our Services & Pricing
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our premium services and book your appointment directly.
          </p>
        </motion.div>

        {/* Service Categories */}
        <div className="space-y-12">
          {serviceCategories.map((category, index) => (
            <div key={category.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">{category.title}</h2>
                <div className="space-y-4">
                  {category.services.map((service, i) => (
                    <div
                      key={service.name}
                      className="flex justify-between border-b py-2 border-gray-200"
                    >
                      <span className="text-gray-700">{service.name}</span>
                      <span className="text-gray-600">{service.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Booking Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Book Your Appointment
          </h2>

          {/* Fresha Booking Link */}
          <div className="mb-8">
            <a
              href="https://www.fresha.com/book-now/v-blush-ec0j4r5b/all-offer?share&pId=1359753"
              target="_blank"
              rel="noopener noreferrer"
              className="button inline-block bg-gold-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gold-700 transition-all"
            >
              Book Now on Fresha
            </a>
          </div>

          {/* Treatwell Booking Link */}
          <div className="mb-8">
            <a
              href="https://www.treatwell.co.uk/place/v-blush-hair-and-beauty/?serviceIds=TR5181175,TR5181214,TR5181181"
              target="_blank"
              rel="noopener noreferrer"
              className="button inline-block bg-gold-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gold-700 transition-all"
            >
              Book Now on Treatwell
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
