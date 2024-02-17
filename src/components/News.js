import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: "cbs-news", name: "CBS News" },
      author: null,
      title: "New York lawmakers become nation's highest-paid after 29% raise",
      description:
        "The pay hike comes with restrictions, including a cap on outside income that will take effect in a couple years.",
      url: "https://www.cbsnews.com/news/new-york-lawmakers-highest-paid-salaries-29-percent-pay-raise/",
      urlToImage:
        "https://assets2.cbsnewsstatic.com/hub/i/r/2023/01/02/8ab77abf-21d1-45bf-a213-64a15e495938/thumbnail/1200x630/c927e47a94d2f9fc927d7a967c302e26/new-york-lawmakers-capitol-ap22356697999059.jpg",
      publishedAt: "2023-01-02T09:49:40+00:00",
      content:
        "Albany — Just in time for the New Year, New York lawmakers have become the highest paid state legislators in the nation under a bill signed Saturday. Members of both houses are getting a pay raise of… [+1618 chars]",
    },
    {
      source: { id: "les-echos", name: "Les Echos" },
      author: "Guillaume de Calignon",
      title:
        "Un tiers de l'économie mondiale sera en récession en 2023, selon le FMI",
      description:
        "Pour Kristalina Georgieva, la directrice générale du Fonds monétaire international, l'année qui vient de s'ouvrir serait « plus difficile » que celle qui s'est terminée. « Les Etats-Unis pourraient éviter la récession » mais « la moitié de l'UE sera en récess…",
      url: "https://www.lesechos.fr/monde/enjeux-internationaux/un-tiers-de-leconomie-mondiale-sera-en-recession-en-2023-selon-le-fmi-1893189",
      urlToImage:
        "https://media.lesechos.com/api/v1/images/view/63b2a6bc1b1043001755557b/1280x720/0703123062736-web-tete.jpg",
      publishedAt: "2023-01-02T09:39:41Z",
      content:
        "Le Fonds monétaire international (FMI) vous souhaite une bonne et heureuse année 2023. Celle-ci a à peine commencé que l'institution de Washington envoie des messages déprimants sur l'économie mondia… [+2524 chars]",
    },
    {
      source: { id: "cbc-news", name: "CBC News" },
      author: "CBC News",
      title:
        "From pollution to power: Canada's first Indigenous-owned bioenergy facility opens | CBC News",
      description:
        "The Meadow Lake Tribal Council, comprised of nine First Nations, has opened the first 100 percent Indigenous-owned bioenergy facility in Canada. The facility uses wood waste generated from the tribal council's sawmill to generate heat and power.",
      url: "http://www.cbc.ca/news/canada/saskatchewan/norsask-indigenous-owned-bioenergy-1.6677887",
      urlToImage:
        "https://i.cbc.ca/1.6678048.1670453279!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/norsask-forest-products-sawmill.jpg",
      publishedAt: "2023-01-02T09:07:30.7619319Z",
      content:
        "As the temperature dips to -28 C, Paul Opikokew is ready for the unexpected at the newly-built Meadow Lake Tribal Council Bioenergy Centre in northwestern Saskatchewan, now being tested by its first … [+5885 chars]",
    },
    {
      source: {
        id: "australian-financial-review",
        name: "Australian Financial Review",
      },
      author: "Julie-anne Sprague, Michael Bailey",
      title:
        "Gina Rinehart, Andrew Forrest add to Rich List fortunes as Atlassian duo Mike Cannon-Brookes, Scott Farquhar lose billions",
      description:
        "The nation’s miners and manufacturers enter the new year building on their massive fortunes, while the country’s top tech entrepreneurs are nursing eye-watering losses.",
      url: "http://www.afr.com/rich-list/rich-listers-ride-the-global-resources-bonanza-20221220-p5c7vr",
      urlToImage:
        "https://static.ffx.io/images/$zoom_0.143%2C$multiply_4%2C$ratio_1.777778%2C$width_1059%2C$x_17%2C$y_2/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_no_label_no_age_social_wm/527a9f7fe084898c52670678272c47e483613380",
      publishedAt: "2023-01-02T09:00:00Z",
      content:
        "High school drop-out Chris Ellison enters 2023 joining the double billionaires club, with the Mineral Resources founders wealth surging by almost $600 million to $2.25 billion. It represents a gain o… [+4824 chars]",
    },
    {
      source: { id: "nbc-news", name: "NBC News" },
      author: "Aria Bendix",
      title:
        "Poor hydration linked to early aging and chronic disease in study",
      description:
        "People who don't drink enough fluid might age faster and face a higher risk of chronic disease than well-hydrated people, a National Institutes of Health study  found.",
      url: "https://www.nbcnews.com/health/health-news/poor-hydration-linked-early-aging-chronic-disease-study-rcna63741",
      urlToImage:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2022-12/221230-water-hydration-health-benefits-se-106p-90618f.jpg",
      publishedAt: "2023-01-02T09:00:00Z",
      content:
        "Adults who aren't sufficiently hydrated may age faster, face a higher risk of chronic diseases and be more likely to die younger than those who stay well-hydrated, according to a new study from the N… [+5047 chars]",
    },
    {
      source: { id: "bbc-sport", name: "BBC Sport" },
      author: null,
      title: "Djokovic welcomed back to Australia",
      description:
        "Novak Djokovic receives a positive welcome back to Australia as he made a rare doubles appearances at the Adelaide International.",
      url: "http://www.bbc.co.uk/sport/tennis/64143350",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/9ED1/production/_128175604_64143350.jpg",
      publishedAt: "2023-01-02T08:22:25.1061473Z",
      content:
        "Novak Djokovic teamed up with Canada's Vasek Pospisil in the men's doubles\r\nNovak Djokovic received a positive welcome back to Australia as he made a rare doubles appearances at the Adelaide Internat… [+2046 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Taliban seeks economic self-sufficiency and foreign investment for Afghanistan, minister says",
      description:
        "The Taliban administration will encourage self-sufficiency and wants international trade and investment, the acting commerce minister said, as Afghanistan faces isolation and suspension of some humanitarian operations over restrictions on women.",
      url: "https://www.reuters.com/world/asia-pacific/taliban-seeks-economic-self-sufficiency-foreign-investment-afghanistan-minister-2023-01-02/",
      urlToImage:
        "https://www.reuters.com/resizer/2Ev0UhJuDxViJ157LZYR6pV4zFU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/IRDQ3ILTFRM7FEM37PFXHLVLZA.jpg",
      publishedAt: "2023-01-02T07:09:50Z",
      content:
        "KABUL, Jan 2 (Reuters) - The Taliban administration will encourage self-sufficiency and wants international trade and investment, the acting commerce minister said, as Afghanistan faces isolation and… [+3154 chars]",
    },
    {
      source: { id: "google-news-ca", name: "Google News (Canada)" },
      author: null,
      title:
        "Syria says Israel strike puts Damascus airport briefly out of service",
      description:
        "The Syrian army said on Monday an Israeli missile strike had briefly put the Damascus International Airport out of service, the latest in a string of strikes targeting Iran-linked assets.",
      url: "https://www.reuters.com/world/middle-east/syrian-state-media-says-israeli-aggression-targets-southern-region-damascus-city-2023-01-01/",
      urlToImage:
        "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=124",
      publishedAt: "2023-01-02T06:34:00+00:00",
      content:
        "AMMAN, Jan 2 (Reuters) - The Syrian army said on Monday an Israeli missile strike had briefly put the Damascus International Airport out of service, the latest in a string of strikes targeting Iran-l… [+2645 chars]",
    },
    {
      source: { id: "news-com-au", name: "News.com.au" },
      author: null,
      title: "Nation bans foreigners from buying homes",
      description:
        "<p>A ban on foreigners buying residential property in Canada took effect Sunday, aiming to make more homes available to locals facing a housing crunch.</p>",
      url: "https://www.news.com.au/finance/real-estate/buying/canada-bans-foreigners-from-buying-homes-amid-housing-crisis/news-story/54d47d889d20f6ce35d24f3d08a4edc5",
      urlToImage:
        "https://content.api.news/v3/images/bin/5e5f843b32033c9e3fde2ee92ba0644d",
      publishedAt: "2023-01-02T04:05:00Z",
      content:
        "A ban on foreigners buying residential property in Canada took effect Sunday, aiming to make more homes available to locals facing a housing crunch.\r\nSeveral exceptions in the act allow individuals s… [+1965 chars]",
    },
    {
      source: { id: "google-news-in", name: "Google News (India)" },
      author: "Harish Damodaran",
      title:
        "The International Year of Millets: how India’s govt can promote the cereals in 2023",
      description:
        "Despite their nutritional advantages for consumers, and hardiness (including resistance to drought) for farmers, millets aren't the first choice for either. What can be done here? We take a look.",
      url: "https://indianexpress.com/article/explained/explained-economics/international-year-of-millets-india-farmers-united-states-pm-modi-8355579/",
      urlToImage:
        "https://images.indianexpress.com/2023/01/IARI-has-developed-Pusa-1201-a-high-yield-disease-resistant-hybrid-bajra.-Express.jpg",
      publishedAt: "2023-01-02T01:30:55+00:00",
      content:
        "The United Nations has declared 2023 as the International Year of Millets. Since that was at the initiative of India, which also accounts for a fifth of the worlds millets production, the Narendra Mo… [+6912 chars]",
    },
    {
      source: { id: "al-jazeera-english", name: "Al Jazeera English" },
      author: "Al Jazeera",
      title: "Israeli raid shuts down Damascus airport, says Syria military",
      description:
        "Two soldiers killed as Israeli raid puts Damascus International Airport out of service, the Syrian military says.",
      url: "http://www.aljazeera.com/news/2023/1/2/israeli-raid-shuts-down-damascus-airport-says-syria-military",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2020/09/breaking-news@2x.png?resize=1200%2C675",
      publishedAt: "2023-01-02T00:43:05Z",
      content:
        "Syrias military says an Israeli air raid has killed at least two Syrian soldiers and put the countrys main international airport out of service.\r\nThe attack, which targeted the Damascus International… [+384 chars]",
    },
    {
      source: { id: "google-news-ca", name: "Google News (Canada)" },
      author: null,
      title:
        "Lula sworn in as Brazil president, vows drastic change from predecessor | CBC News",
      description:
        "Luiz Inácio Lula da Silva was sworn in as Brazil's president on Sunday, delivering a searing indictment of far-right former leader Jair Bolsonaro and vowing a drastic change of course to rescue a nation plagued by hunger, poverty and racism.",
      url: "https://www.cbc.ca/news/world/lula-brazil-president-elect-inauguration-1.6700990",
      urlToImage:
        "https://i.cbc.ca/1.6701183.1672627835!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/brazil-politics.JPG",
      publishedAt: "2023-01-01T22:47:14+00:00",
      content:
        "Luiz Inácio Lula da Silva was sworn in as Brazil's president on Sunday, delivering a searing indictment of far-right former leader Jair Bolsonaro and vowing a drastic change of course to rescue a nat… [+6027 chars]",
    },
    {
      source: { id: "abc-news-au", name: "ABC News (AU)" },
      author: "Heather Ewart",
      title:
        "Back Roads host Heather Ewart charts evolution of pubs from male-dominated drinking holes to community hubs",
      description:
        "From male-dominated drinking holes to community hubs, the local pub has become a national institution worth celebrating.",
      url: "http://www.abc.net.au/news/2023-01-02/great-australian-pubs-back-roads-heather-ewart-abc-tv/101798200",
      urlToImage:
        "https://live-production.wcms.abc-cdn.net.au/70457b66a6f0c2952af782feb912c372?impolicy=wcms_crop_resize&cropH=2268&cropW=4032&xPos=0&yPos=378&width=862&height=485",
      publishedAt: "2023-01-01T21:27:24Z",
      content:
        "We've copped a hammering in the past year. From dry spells in parts of the Top End to floods and more floods along the eastern seaboard and inland, in New South Wales and Victoria.\r\nMany of us have n… [+5330 chars]",
    },
    {
      source: { id: "google-news-fr", name: "Google News (France)" },
      author: "Jean Quatremer",
      title:
        "Restriction pour les voyageurs en provenance de Chine : «zéro Covid» et zéro cohérence pour Macron",
      description:
        "En imposant unilatéralement des mesures sanitaires aux voyageurs venant de Chine, le chef de l’Etat s’affranchit de la coordination européenne qu’il appelle pourtant de ses vœux.",
      url: "https://www.liberation.fr/international/europe/restriction-pour-les-voyageurs-en-provenance-de-chine-zero-covid-et-zero-coherence-pour-macron-20230101_KYGJ7TIR3VHQ3OPFJZNOLF5EIM/",
      urlToImage:
        "https://www.liberation.fr/resizer/XHqS5hOPq4Zz3wlhFQywZi7qIr4=/1200x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/liberation/3F34EFAXFVCGVMXG7OYY4LYPRU.jpg",
      publishedAt: "2023-01-01T19:39:00+00:00",
      content:
        "Trois ans après le début de la pandémie de coronavirus, assiste-t-on au retour de la panique, des fermetures de frontières désordonnées, des mesures nationales sans queue ni tête ? Depuis labandon br… [+720 chars]",
    },
    {
      source: { id: "fox-news", name: "Fox News" },
      author: "Fox News",
      title:
        "Border crisis a 'complete catastrophe' on national security, humanitarian scales: Monica De La Cruz | Fox News Video",
      description:
        "'Sunday Morning Futures' brings in congresswoman-elect Monica De La Cruz, R-Texas, to weigh in on the border crisis and how the Biden administration's lack of attention contributed to the issue.",
      url: "https://video.foxnews.com/v/6318082372112/",
      urlToImage:
        "https://a57.foxnews.com/cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/2f302caa-1c2a-4c17-8ad5-0eeee13b6f1f/c8252b4e-3d83-49f1-aabe-e294677ef9ff/1280x720/match/1024/512/image.jpg?ve=1&tl=1",
      publishedAt: "2023-01-01T17:52:17.5115686Z",
      content:
        "©2023 FOX News Network, LLC. All rights reserved. This material may not be published, broadcast, rewritten, or redistributed. All market data delayed 20 minutes.",
    },
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Letters to the Editor",
      title: "Fentanyl should be categorized as a weapon of mass destruction",
      description:
        "The designation would be a proportionate response to an unprecedented national crisis.",
      url: "https://www.washingtonpost.com/opinions/2023/01/01/fentanyl-categorized-weapon-mass-destruction/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/R2GFIQTBNQHI3MKDV5I5PI3OOI.jpg&w=1440",
      publishedAt: "2023-01-01T16:57:29Z",
      content:
        "Comment on this story\r\nIt was disappointing to see Courtland Milloy play down in his Dec. 28 Metro column, Is fentanyl a weapon of mass destruction? the recent call by 18 state attorneys general aski… [+1432 chars]",
    },
    {
      source: { id: "abc-news", name: "ABC News" },
      author: "Tal Axelrod",
      title:
        "Jan. 6 'disqualifies' Trump from GOP presidential nomination, Asa Hutchinson says",
      description:
        "Arkansas' governor said he wants to focus on moving beyond the former president.",
      url: "https://abcnews.go.com/Politics/jan-6-disqualifies-trump-gop-presidential-nomination-asa/story?id=96016549",
      urlToImage:
        "https://s.abcnews.com/images/Politics/asa-hutchinson-file-gty-jef-220824_1661379537478_hpMain_2_16x9_992.jpg",
      publishedAt: "2023-01-01T16:30:00Z",
      content:
        'Arkansas\' Republican Gov. Asa Hutchinson said Sunday that the pro-Trump Jan. 6, 2021, insurrection on Capitol Hill "disqualifies" Donald Trump from winning the 2024 GOP nomination as he considers his… [+4389 chars]',
    },
    {
      source: { id: "axios", name: "Axios" },
      author: "Emma Way",
      title: "Discrimination complaints surge in U.S. schools",
      description:
        "The majority of complaints allege discrimination based on disability, race or sex.",
      url: "https://www.axios.com/2023/01/01/education-department-discrimination-complaints-record",
      urlToImage:
        "https://images.axios.com/sVk5NhFj_KKWNZFQkelwgzNjPVk=/0x0:1920x1080/1366x768/2023/01/01/1672583565610.jpg",
      publishedAt: "2023-01-01T14:45:24Z",
      content:
        "The U.S. Department of Education's Office for Civil Rights logged nearly 19,000 discrimination complaints from Oct. 1, 2021 to Sept. 30, 2022, more than double the previous year, the New York Times r… [+1330 chars]",
    },
    {
      source: { id: "four-four-two", name: "FourFourTwo" },
      author: "Tom Hancock",
      title:
        "New Liverpool man Cody Gakpo admits he thought he would join Manchester United",
      description:
        "The Netherlands star completed a big-money move to Anfield from PSV after starring for his national team at the World Cup in Qatar",
      url: "https://www.fourfourtwo.com/news/new-liverpool-man-cody-gakpo-admits-he-thought-he-would-join-manchester-united",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/uuL6nEV6nAdy7XbwL3pdSL-1200-80.jpg",
      publishedAt: "2023-01-01T11:55:23Z",
      content:
        "New Liverpool signing Cody Gakpo has admitted that he thought he would sign for Manchester United last summer.\r\nThe Netherlands star completed an initial £37m move to Anfield from PSV just after Chri… [+1397 chars]",
    },
    {
      source: { id: "usa-today", name: "USA Today" },
      author: null,
      title:
        "As COVID turns 3, experts worry where the next pandemic will come from – and if we'll be ready",
      description:
        "Public health and national defense experts worry the next pandemic will come at an even higher price than this one. And the nation needs to be ready.",
      url: "https://www.usatoday.com/story/news/health/2023/01/01/covid-anniversary-next-pandemic-expert-concern/10847848002/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2020/04/15/USAT/56dc1dae-9965-4c02-bf9f-f17630744d22-AP_Virus_Outbreak_China_Delay_4.JPG?auto=webp&crop=4999,2812,x0,y0&format=pjpg&width=1200",
      publishedAt: "2023-01-01T10:00:04+00:00",
      content:
        "For years, public health experts warned of the possibility of an illness spreading across the globe killing millions. After all, it had happened before.\r\nMeasures were in place around the world to sp… [+12475 chars]",
    },
  ];
  constructor() {
    super();
    //console.log("Hello I am a constructor form News Component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=bac29c736a124a108347456b0b7b5526";
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log("response from api haha");
    // console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  render() {
    // console.log("articles array", this.state.articles);
    return (
      <div className="container my-4">
        <h2>NewsMonkey - Top Headlines</h2>

        <div className="row">
          {this.state.articles.map(element => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
