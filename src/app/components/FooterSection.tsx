"use client"

import { Box, Container, Typography, Link, IconButton, Button } from "@mui/material"
import { Facebook, LinkedIn, Twitter, Instagram, YouTube } from "@mui/icons-material"
import Image from "next/image"

interface FooterSection {
  title: string
  links: { text: string; href: string }[]
}

const footerSections: FooterSection[] = [
  {
    title: "Get support",
    links: [
      { text: "Help Center", href: "#" },
      { text: "Live chat", href: "#" },
      { text: "Check order status", href: "#" },
      { text: "Refunds", href: "#" },
      { text: "Report abuse", href: "#" },
    ],
  },
  {
    title: "Payments and protections",
    links: [
      { text: "Safe and easy payments", href: "#" },
      { text: "Alibaba.com Business Edge Credit Card", href: "#" },
      { text: "Money-back policy", href: "#" },
      { text: "On-time shipping", href: "#" },
      { text: "After-sales protections", href: "#" },
      { text: "Product monitoring services", href: "#" },
    ],
  },
  {
    title: "Source on Alibaba.com",
    links: [
      { text: "Request for Quotation", href: "#" },
      { text: "Membership program", href: "#" },
      { text: "Alibaba.com Logistics", href: "#" },
      { text: "Sales tax and VAT", href: "#" },
      { text: "Alibaba.com Reads", href: "#" },
    ],
  },
  {
    title: "Sell on Alibaba.com",
    links: [
      { text: "Start selling", href: "#" },
      { text: "Seller Central", href: "#" },
      { text: "Become a Verified Supplier", href: "#" },
      { text: "Partnerships", href: "#" },
      { text: "Download the app for suppliers", href: "#" },
    ],
  },
  {
    title: "Get to know us",
    links: [
      { text: "About Alibaba.com", href: "#" },
      { text: "Corporate responsibility", href: "#" },
      { text: "News center", href: "#" },
      { text: "Careers", href: "#" },
    ],
  },
]

const paymentMethodIcons: string[] = [
  "/icons/mastercard.png",
  "/icons/ssl.png",
  "/icons/verisign.png",
  "/icons/visa.png",
  "/icons/mastercard.png",
  "/icons/amex.png",
  "/icons/paypal.png",
  "/icons/applepay.png",
  "/icons/klarna.png",
  "/icons/afterpay.png",
  "/icons/paylater.png",
  "/icons/googlepay.png",
  "/icons/discover.png",
  "/icons/diners.png",
  "/icons/jcb.png",
  "/icons/unionpay.png",
  "/icons/tt.png",
]

const alibabaServices = [
  "AliExpress",
  "1688.com",
  "Tmall Taobao World",
  "Alipay",
  "Lazada",
  "Taobao Global",
  "TAO",
  "Trendyol",
  "Europages",
]

const policyLinks = [
  "Policies and rules",
  "Legal Notice",
  "Product Listing Policy",
  "Intellectual Property Protection",
  "Privacy Policy",
  "Terms of Use",
  "Integrity Compliance",
]

export default function Footer() {
  return (
    <Box component="footer" sx={{ pt: 6, pb: 0, px: 4 }}>
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
          {footerSections.map((section, index) => (
            <Box key={index} sx={{ flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 18%" }, minWidth: 180 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#333", mb: 2, fontSize: "1rem" }}>{section.title}</Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {section.links.map((link, i) => (
                  <Link key={i} href={link.href} sx={{ color: "#666", textDecoration: "none", fontSize: "0.875rem", "&:hover": { color: "#1976d2", textDecoration: "underline" } }}>{link.text}</Link>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Payment Icons */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
            {paymentMethodIcons.map((icon, index) => (
              <Image key={index} src={icon} alt="Payment Icon" width={50} height={50} style={{ objectFit: "contain", backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: 6, padding: 6 }} />
            ))}
          </Box>
        </Box>

        {/* Social & App Section */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: "center", gap: 4, mb: 4 }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            {[Facebook, LinkedIn, Twitter, Instagram, YouTube].map((Icon, i) => (
              <IconButton key={i} sx={{ color: "#666", "&:hover": { color: "#1976d2" } }}><Icon /></IconButton>
            ))}
            <Box sx={{ width: 32, height: 32, backgroundColor: "#000", borderRadius: "50%", color: "#fff", fontSize: "0.75rem", fontWeight: "bold", display: "flex", justifyContent: "center", alignItems: "center" }}>TT</Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center", gap: 2 }}>
            <Typography variant="body2" sx={{ color: "#666", textAlign: { xs: "center", sm: "left" } }}>
              Trade on the go with the <Link href="#" sx={{ color: "#1976d2", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>Alibaba.com app</Link>
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button variant="contained" sx={{ backgroundColor: "#000", color: "#fff", fontSize: "0.75rem", px: 2, py: 1, borderRadius: 2 }}>📱 App Store</Button>
              <Button variant="contained" sx={{ backgroundColor: "#000", color: "#fff", fontSize: "0.75rem", px: 2, py: 1, borderRadius: 2 }}>📱 Google Play</Button>
            </Box>
          </Box>
        </Box>

        {/* Alibaba Services */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1 }}>
            {alibabaServices.map((service, i) => (
              <Box key={i} sx={{ display: "flex", alignItems: "center" }}>
                <Link href="#" sx={{ color: "#666", fontSize: "0.875rem", textDecoration: "none", "&:hover": { textDecoration: "underline", color: "#1976d2" } }}>{service}</Link>
                {i < alibabaServices.length - 1 && <Typography sx={{ color: "#ccc", mx: 1 }}>|</Typography>}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Policy Links */}
        <Box sx={{ mb: 0 }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1 }}>
            {policyLinks.map((policy, i) => (
              <Box key={i} sx={{ display: "flex", alignItems: "center" }}>
                <Link href="#" sx={{ color: "#666", fontSize: "0.875rem", textDecoration: "none", "&:hover": { textDecoration: "underline", color: "#1976d2" } }}>{policy}</Link>
                {i < policyLinks.length - 1 && <Typography sx={{ color: "#ccc", mx: 1 }}>·</Typography>}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      {/* Bottom Section with Background */}
      <Box sx={{ mt: 4, py: 2, }}>
        <Container maxWidth="xl">
          <Typography variant="body2" align="center" sx={{ fontSize: "0.75rem", color: "#666" }}>
            © 1999-2025 Alibaba.com. 所有权利保留 杭州阿里巴巴海外科技有限公司
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 1, gap: 1 }}>
            <Box sx={{ width: 16, height: 16, backgroundColor: "#ff6b35", borderRadius: "50%" }} />
            <Box sx={{ width: 16, height: 16, backgroundColor: "#ff6b35", borderRadius: "50%" }} />
            <Typography variant="body2" sx={{ fontSize: "0.75rem", color: "#999", ml: 1 }}>
              浙公网安备33010002000366 浙ICP备20240675344号-3
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
