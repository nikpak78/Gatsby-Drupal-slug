import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Νέες «φωτιές» άναψε ο υπουργός Εξωτερικών Γιώργος Κατρούγκαλος με τις δηλώσεις του στο One Channel για το Αιγαίο όπου έκανε λόγο και για τουρκικά δικαιώματα αλλά και για «συνδιαχείριση» με τη γειτονική χώρα, η οποία όμως, όπως είπε, δεν μπορεί να προχωρήσει εάν δεν έχουν ξεκαθαριστεί οι οικονομικές ζώνες και τα νομικά δικαιώματα που έχει κάθε μία από τις δύο πλευρές.</p>
    
    <p>Μιλώντας στην εκπομπή One Talk, ο υπουργός Εξωτερικών  υποστήριξε ότι «επιδιώκαμε πάντοτε να οριοθετήσουμε τη δική μας Οικονομική Αποκλειστική Ζώνη (ΑΟΖ) και υφαλοκρηπίδα, προφανώς σε σεβασμό στη διεθνή νομιμότητα και ιδιαίτερα στο Δίκαιο της θάλασσας. Το ίδιο και η Κύπρος» είπε χαρακτηριστικά, υπογραμμίζοντας όμως στη συνέχεια πως  πως και η Τουρκία έχει δικαιώματα στο Αιγαίο.</p>
    <p>«Μόνο αυτά που της αναγνωρίζει το Διεθνές Δίκαιο και όχι αυτά που θέλει να επιβάλει με τη δύναμή της» ανέφερε αμέσως μετά ο κ. Κατρούγκαλος, προσθέτοντας πως είναι πάντα προς το συμφέρον της δικής μας χώρας να θέλουμε η συζήτηση να γίνεται αποκλειστικά και μόνο στο τραπέζι του Διεθνούς Δικαίου. </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
