const mockProducts = [
  {
    id: "1",
    name: "Áo đấu Manchester United 1999",
    price: "1200000",
    priceCurrency: "VND",
    brand: "Manchester United",
    availability: "InStock",
    image: "/asset/mu1999.webp",
    condition: "Còn mới 90%",
    slug: "ao-mu-1999",
    description:
      "Áo đấu Manchester United mùa giải 1998-1999, năm mà MU giành cú ăn ba lịch sử (Premier League, FA Cup, Champions League). Thiết kế cổ điển với logo Sharp làm nhà tài trợ chính. Đây là một mẫu áo hiếm dành cho các fan hâm mộ Quỷ Đỏ.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      reviewCount: "20",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Nguyễn Văn A",
        },
        datePublished: "2025-04-20",
        reviewBody: "Áo đẹp, chất liệu tốt, rất ấn tượng!",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Trần Thị B",
        },
        datePublished: "2025-04-19",
        reviewBody: "Chất lượng áo tốt, màu sắc đẹp, nhưng giá hơi cao.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4",
          bestRating: "5",
          worstRating: "1",
        },
      },
    ],
  },
  {
    id: "2",
    name: "Áo đấu Real Madrid 2002",
    price: "950000",
    priceCurrency: "VND",
    brand: "Real Madrid",
    availability: "InStock",
    image: "/asset/real2002.webp",
    condition: "Còn mới 80%",
    slug: "ao-real-2002",
    description:
      "Áo đấu Real Madrid 2001-2002, mùa giải mà Los Blancos lên ngôi vô địch Champions League lần thứ 9 với bàn thắng tuyệt đẹp của Zidane. Áo có thiết kế đơn giản, logo Siemens Mobile và phong cách hoài cổ.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.0",
      reviewCount: "15",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Trần Văn B",
        },
        datePublished: "2025-04-18",
        reviewBody: "Áo rất đẹp, nhưng chất liệu chưa thực sự xuất sắc.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "3",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Lê Thị C",
        },
        datePublished: "2025-04-17",
        reviewBody: "Chất lượng không như tôi mong đợi.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "2",
          bestRating: "5",
          worstRating: "1",
        },
      },
    ],
  },
  {
    id: "3",
    name: "Áo đấu AC Milan 2007",
    price: "1100000",
    priceCurrency: "VND",
    brand: "AC Milan",
    availability: "InStock",
    image: "/asset/acmilan2007.webp",
    condition: "Còn mới 85%",
    slug: "ao-milan-2007",
    description:
      "Áo đấu AC Milan mùa giải 2006-2007, năm mà Rossoneri vô địch Champions League sau khi đánh bại Liverpool 2-1. Áo có thiết kế sọc đỏ đen truyền thống, biểu tượng Adidas và logo bwin tài trợ.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.3",
      reviewCount: "30",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Lê Thị C",
        },
        datePublished: "2025-04-15",
        reviewBody: "Chất liệu rất tốt, phù hợp cho người hâm mộ AC Milan.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Nguyễn Thị D",
        },
        datePublished: "2025-04-14",
        reviewBody: "Áo đẹp nhưng giá hơi cao.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4",
          bestRating: "5",
          worstRating: "1",
        },
      },
    ],
  },
  {
    id: "4",
    name: "Áo đấu Barcelona 2009",
    price: "1300000",
    priceCurrency: "VND",
    brand: "Barcelona",
    availability: "InStock",
    image: "/asset/barca2009.webp",
    condition: "Còn mới 95%",
    slug: "ao-barca-2009",
    description:
      "Áo đấu Barcelona mùa giải 2008-2009, mùa giải huyền thoại với cú ăn ba của đội bóng xứ Catalan. Thiết kế nổi bật với logo UNICEF trên ngực áo, cùng các đường sọc xanh đỏ truyền thống.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "50",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Nguyễn Thị D",
        },
        datePublished: "2025-04-12",
        reviewBody:
          "Một sản phẩm tuyệt vời, phù hợp với những người yêu Barcelona.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Lê Văn E",
        },
        datePublished: "2025-04-10",
        reviewBody: "Áo đẹp, thiết kế hoàn hảo, nhưng giá hơi đắt.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4",
          bestRating: "5",
          worstRating: "1",
        },
      },
    ],
  },
  {
    id: "5",
    name: "Áo đấu Chelsea 2012",
    price: "1000000",
    priceCurrency: "VND",
    brand: "Chelsea",
    availability: "InStock",
    image: "/asset/chelsea2012.webp",
    condition: "Còn mới 88%",
    slug: "ao-chelsea-2012",
    description:
      "Áo đấu Chelsea 2011-2012, mùa giải lịch sử khi The Blues lần đầu tiên giành chức vô địch Champions League. Thiết kế màu xanh truyền thống, logo Samsung tài trợ và phong cách mạnh mẽ.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.2",
      reviewCount: "18",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Nguyễn Thị F",
        },
        datePublished: "2025-04-09",
        reviewBody: "Áo đẹp, chất liệu ổn, nhưng hơi chật.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "3",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Trần Văn G",
        },
        datePublished: "2025-04-08",
        reviewBody: "Chất lượng ổn, nhưng hơi tiếc vì không vừa với tôi.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "3",
          bestRating: "5",
          worstRating: "1",
        },
      },
    ],
  },
  {
    id: "6",
    name: "Áo đấu Arsenal 2004",
    price: "1400000",
    priceCurrency: "VND",
    brand: "Arsenal",
    availability: "InStock",
    image: "/asset/ars2004.jpg",
    condition: "Còn mới 90%",
    slug: "ao-arsenal-2004",
    description:
      "Áo đấu Arsenal mùa giải 2003-2004, mùa giải bất bại của Pháo Thủ tại Premier League. Thiết kế đặc biệt với màu đỏ đậm, logo O2 trên ngực áo và huy hiệu Invincibles mang tính biểu tượng.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.6",
      reviewCount: "25",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Lê Thị H",
        },
        datePublished: "2025-04-05",
        reviewBody: "Áo rất đẹp, rất phù hợp với những người hâm mộ Arsenal.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Nguyễn Văn I",
        },
        datePublished: "2025-04-04",
        reviewBody: "Chất liệu tốt, giá hợp lý.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4",
          bestRating: "5",
          worstRating: "1",
        },
      },
    ],
  },
  {
    id: "7",
    name: "Áo đấu Inter Milan 2010",
    price: "1250000",
    priceCurrency: "VND",
    brand: "Inter Milan",
    availability: "InStock",
    image: "/asset/inter2010.webp",
    condition: "Còn mới 85%",
    slug: "ao-inter-2010",
    description:
      "Áo đấu Inter Milan mùa giải 2009-2010, mùa giải huyền thoại với cú ăn ba dưới thời Jose Mourinho. Áo có thiết kế sọc xanh đen đặc trưng, biểu tượng Pirelli và phong cách cổ điển.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.4",
      reviewCount: "22",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Trần Thị J",
        },
        datePublished: "2025-04-02",
        reviewBody: "Áo đẹp, nhưng hơi nhỏ so với kích cỡ của tôi.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "3",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Lê Văn K",
        },
        datePublished: "2025-04-01",
        reviewBody: "Rất đẹp, nhưng mong có thêm nhiều kích cỡ.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4",
          bestRating: "5",
          worstRating: "1",
        },
      },
    ],
  },
  {
    id: "8",
    name: "Áo đấu Bayern Munich 2013",
    price: "1100000",
    priceCurrency: "VND",
    brand: "Bayern Munich",
    availability: "InStock",
    image: "/asset/bayern2013.webp",
    condition: "Còn mới 87%",
    slug: "ao-bayern-2013",
    description:
      "Áo đấu Bayern Munich mùa giải 2012-2013, khi Hùm Xám giành cú ăn ba lịch sử với chức vô địch Bundesliga, DFB Pokal và Champions League. Áo có thiết kế màu đỏ truyền thống với logo T-Mobile nổi bật.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.2",
      reviewCount: "28",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Nguyễn Thị L",
        },
        datePublished: "2025-03-30",
        reviewBody: "Áo đẹp, chất liệu mềm mại, giá hợp lý.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4",
          bestRating: "5",
          worstRating: "1",
        },
      },
    ],
  },
  {
    id: "9",
    name: "Áo đấu Liverpool 2005",
    price: "1300000",
    priceCurrency: "VND",
    brand: "Liverpool",
    availability: "InStock",
    image: "/asset/liv2005.webp",
    condition: "Còn mới 92%",
    slug: "ao-liverpool-2005",
    description:
      "Áo đấu Liverpool mùa giải 2004-2005, năm mà Lữ Đoàn Đỏ giành chức vô địch Champions League theo cách không thể quên được. Áo có thiết kế cổ điển, logo Carlsberg trên ngực áo và màu đỏ đặc trưng.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.3",
      reviewCount: "33",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Nguyễn Thị M",
        },
        datePublished: "2025-03-28",
        reviewBody: "Áo tuyệt vời, mang đậm dấu ấn lịch sử.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
      },
    ],
  },
  {
    id: "10",
    name: "Áo đấu Juventus 2003",
    price: "1250000",
    priceCurrency: "VND",
    brand: "Juventus",
    availability: "InStock",
    image: "/asset/juv1996.jpg",
    condition: "Còn mới 80%",
    slug: "ao-juventus-2003",
    description:
      "Áo đấu Juventus mùa giải 2002-2003, mùa giải gần nhất của Lão Bà tại Champions League trước khi họ gặp AC Milan trong trận chung kết. Áo có thiết kế sọc trắng đen truyền thống với logo Nike và BetClic tài trợ.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.1",
      reviewCount: "27",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Trần Thị N",
        },
        datePublished: "2025-03-25",
        reviewBody: "Áo đẹp, rất chất lượng và phù hợp với giá.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4",
          bestRating: "5",
          worstRating: "1",
        },
      },
    ],
  },
];

export default mockProducts;
