export const PublicationItems = [{
    title: 'DISCO: A Dataset of Discord Chat Conversations for Software Engineering Research ',
    author:'Keerthana Muthu Subash, Lakshmi Prasanna Kumar, Sri Lakshmi Vadlamani, Preetha Chatterjee and Olga Baysal',
    year:'2022',
    synopsis: 'The 19th International Conference on Mining Software Repositories (MSR), Data Showcase Track, May 2022.',
    abstract: 'Today, software developers work on complex and fast-moving projects that often require instant assistance from other domain and subject matter experts. Chat servers such as Discord facilitate live communication and collaboration among developers all over the world. With numerous topics discussed in parallel, mining and ana- lyzing the chat data of these platforms would offer researchers and tool makers opportunities to develop software tools and services such as automated virtual assistants, chat bots, chat summarization techniques, Q&A thesaurus, and more. In this paper, we propose a dataset called DISCO consisting of the one-year public DIScord chat COnversations of four software development communities. We have collected the chat data of the channels containing general programming Q&A discussions from the four Discord servers, applied a disentanglement technique [13] to extract conversations from the chat transcripts, and performed a manual validation of conversations on a random sample (500 con- versations). Our dataset consists of 28, 712 conversations, 1, 508, 093 messages posted by 323, 562 users. As a case study on the dataset, we applied a topic modelling technique for extracting the top five general topics that are most discussed in each Discord channel.',
    links: {
        Preprint: 'https://preethac.github.io/files/MuthuSubash_MSR2022_DataShowcase.pdf',
        DOI: null,
        Slides: null,
        Manuscript: null,
        Dataset: null
    }
},
{
    title: 'Automatic Identification of Informative Code in Stack Overflow Posts',
    author:'Preetha Chaterjee',
    year:'2022',
    synopsis: 'The 1st International Workshop on Natural Language-based Software Engineering (NLBSE), co-located with ICSE, May 2022.',
    abstract: 'Despite Stack Overflow’s popularity as a resource for solving coding problems, identifying relevant information from an individual post remains a challenge. The overload of information in a post can make it difficult for developers to identify specific and targeted code fixes. In this paper, we aim to help users identify informative code segments, once they have narrowed down their search to a post relevant to their task. Specifically, we explore natural language- based approaches to extract problematic and suggested code pairs from a post. The goal of the study is to investigate the potential of designing a browser extension to draw the readers’ attention to relevant code segments, and thus improve the experience of software engineers seeking help on Stack Overflow.',
    links: {
        Preprint: 'https://preethac.github.io/files/NLBSE_22.pdf',
        DOI: null,
        Slides: null,
        Manuscript: null,
        Dataset: null
    }
},
{
    title: 'Automatic Extraction of Opinion-based Q&A from Online Developer Chats',
    author:'Preetha Chatterjee, Kostadin Damevski, and Lori Pollock',
    year:'2021',
    synopsis: 'The 43rd International Conference on Software Engineering (ICSE), Technical Track, May 2021.',
    abstract: 'Virtual conversational assistants designed specifically for software engineers could have a huge impact on the time it takes for software engineers to get help. Research efforts are focusing on virtual assistants that support specific software development tasks such as bug repair and pair programming. In this paper, we study the use of online chat platforms as a resource towards collecting developer opinions that could potentially help in building opinion Q&A systems, as a specialized instance of virtual assistants and chatbots for software engineers. Opinion Q&A has a stronger presence in chats than in other developer communications, thus mining them can provide a valuable resource for developers in quickly getting insight about a specific development topic (e.g., What is the best Java library for parsing JSON?). We address the problem of opinion Q&A extraction by developing automatic identification of opinion-asking questions and extraction of participants\' answers from public online developer chats. We evaluate our automatic approaches on chats spanning six programming communities and two platforms. Our results show that a heuristic approach to opinion-asking questions works well (.87 precision), and a deep learning approach customized to the software domain outperforms heuristics-based, machine-learning-based and deep learning for answer extraction in community question answering.',
    links: {
        Preprint: 'https://preethac.github.io/files/ICSE21.pdf',
        DOI: 'https://ieeexplore.ieee.org/document/9402078',
        Slides: 'https://www.slideshare.net/PreethaChatterjee1/automatic-extraction-of-opinionbased-qa-from-online-developer-chats',
        Manuscript: null,
        Dataset: null
    }
},
{
    title: 'Automatically Identifying the Quality of Developer Chats for Post Hoc Use',
    author:'Preetha Chatterjee, Kostadin Damevski, Nicholas A. Kraft, and Lori Pollock',
    year:'2021',
    synopsis: 'Transactions on Software Engineering and Methodology (TOSEM), Feb 2021',
    abstract: 'Software engineers are crowdsourcing answers to their everyday challenges on Q&A forums (e.g., Stack Overflow) and more recently in public chat communities such as Slack, IRC, and Gitter. Many software-related chat conversations contain valuable expert knowledge that is useful for both mining to improve programming support tools and for readers who did not participate in the original chat conversations. However, most chat platforms and communities do not contain built-in quality indicators (e.g., accepted answers, vote counts). Therefore, it is difficult to identify conversations that contain useful information for mining or reading, i.e., conversations of post hoc quality. In this article, we investigate automatically detecting developer conversations of post hoc quality from public chat channels. We first describe an analysis of 400 developer conversations that indicate potential characteristics of post hoc quality, followed by a machine learning-based approach for automatically identifying conversations of post hoc quality. Our evaluation of 2,000 annotated Slack conversations in four programming communities (python, clojure, elm, and racket) indicates that our approach can achieve precision of 0.82, recall of 0.90, F-measure of 0.86, and MCC of 0.57. To our knowledge, this is the first automated technique for detecting developer conversations of post hoc quality.',
    links: {
        Preprint: 'https://preethac.github.io/files/TOSEM21.pdf',
        DOI: 'https://doi.org/10.1145/3450503',
        Slides: null,
        Manuscript: null,
        Dataset: null
    }
},
{
    title: 'Mining Information from Developer Chats Towards Building Software Maintenance Tools (Ph.D. Thesis)',
    author:'Preetha Chatterjee',
    year:'2021',
    synopsis: 'University of Delaware',
    abstract: 'Software developers are increasingly having conversations about software development via online chat services. Many of those chat communications contain valuable information, such as description of code snippets and APIs, opinions on good programming practices, and causes of common errors/exceptions. Researchers have demonstrated that various software engineering tasks (e.g., recommend mentors in software projects, aid API learning) can be supported by mining similar information from other developer communications such as email, bug reports and Q&A forums. However, limited work has focused on investigating the availability and mining of information from developer chats. To successfully mine developer chat communications, one has to address several challenges unique to chats. The nature of chat community content is transient. Developer chats are typically informal conversations, with rapid exchanges of messages between two or more developers, where several clarifying questions and answers are often communicated in short bursts. Chats thus contain shorter, quicker responses, often interleaved with non-information-providing messages. As a result, it is difficult to find relevant information in a large chat history, and important advice is lost over time. My thesis is that software developers communications through online chat forums are a valuable resource to mine and valuable knowledge can be automatically mined from this resource towards improving and building new tools to support software engineers. The focus of this dissertation is Mining Information from Developer Chats Towards Building Software Maintenance Tools: (1) As a first step towards mining, we investigated the availability of information in chats through an empirical study. We also analyzed characteristics of chat conversations that might inhibit accurate automated analysis. (2) Next, we extended an existing algorithm to automatically extract (or disentangle) conversations for analysis by researchers or automatic mining tools. (3) Assessing the quality of information is essential for extracting useful information for building effective software maintenance tools. Hence, we designed an automatic technique to identify post hoc quality conversations, i.e. conversations containing useful information for mining or reading after the conversation has ended. (4) Finally, we studied the use of online chat platforms as a resource towards collecting developer opinions that could potentially help in building opinion Q&A systems, as a specialized instance of virtual assistants and chatbots for software engineers. We developed techniques for automatic identification of opinion-asking questions and extraction of participants\' answers from public online developer chats. This dissertation takes a significant step to positively impact new research directions on mining developer chats, and enables advances in areas including: information retrieval tasks from unstructured communications, enriching existing knowledge bases and community knowledge, efficient information gathering to improve code efficiency and increase developer productivity, building/enhancing recommendation systems and virtual assistants for software engineering.',
    links: {
        Preprint: null,
        DOI: null,
        Slides: null,
        Manuscript: 'https://udspace.udel.edu/handle/19716/29335',
        Dataset: null
    }
},
{
    title: 'Software-related Slack Chats with Disentangled Conversations',
    author:'Preetha Chatterjee, Kostadin Damevski, Nicholas A. Kraft, and Lori Pollock',
    year:'2020',
    synopsis: 'The 17th International Conference on Mining Software Repositories (MSR), Data Showcase Track, Oct 2020. Seoul, South Korea',
    abstract: 'More than ever, developers are participating in public chat communities to ask and answer software development questions. With over ten million daily active users, Slack is one of the most popular chat platforms, hosting many active channels focused on software development technologies, e.g., python, react. Prior studies have shown that public Slack chat transcripts contain valuable information, which could provide support for improving automatic software maintenance tools or help researchers understand developer struggles or concerns. In this paper, we present a dataset of software-related Q&A chat conversations, curated for two years from three open Slack communities (python, clojure, elm). Our dataset consists of 38,955 conversations, 437,893 utterances, contributed by 12,171 users. We also share the code for a customized machine-learning based algorithm that automatically extracts (or disentangles) conversations from the downloaded chat transcripts.',
    links: {
        Preprint: 'https://preethac.github.io/files/MSR_Data_20.pdf',
        DOI: 'https://dl.acm.org/doi/10.1145/3379597.3387493',
        Slides: 'https://www.slideshare.net/PreethaChatterjee1/softwarerelated-slack-chats-with-disentangled-conversations',
        Manuscript: null,
        Dataset: 'https://zenodo.org/record/3627124'
    }
},
{
    title: 'Extracting Archival-Quality Information from Software-Related Chats',
    author:'Preetha Chatterjee',
    year:'2020',
    synopsis: 'The 42nd International Conference on Software Engineering (ICSE), Doctoral Symposium Track, Oct 2020. Seoul, South Korea',
    abstract: 'Software developers are increasingly having conversations about software development via online chat services. Many of those chat communications contain valuable information, such as code descriptions, good programming practices, and causes of common errors/exceptions. However, the nature of chat community content is transient, as opposed to the archival nature of other developer communications such as email, bug reports and Q&A forums. As a result, important information and advice are lost over time. The focus of this dissertation is Extracting Archival Information from Software-Related Chats, specifically to (1) automatically identify conversations that contain archival-quality information, (2) accurately reduce the granularity of the information reported as archival information, and (3) conduct a case study to investigate how archival quality information extracted from chats compare to related posts in Q&A forums. Archiving knowledge from developer chats could be used potentially in several applications such as: creating a new archival mechanism available to a given chat community, augmenting Q&A forums, or facilitating the mining of specific information and improving software maintenance tools.',
    links: {
        Preprint: 'https://preethac.github.io/files/ICSE_DocSymp_20.pdf',
        DOI: 'https://dl.acm.org/doi/10.1145/3377812.3381391',
        Slides: 'https://www.slideshare.net/PreethaChatterjee1/extracting-archivalquality-information-from-softwarerelated-chats-236867937',
        Manuscript: null,
        Dataset: null
    }
},
{
    title: 'Finding Help with Programming Errors: An Exploratory Study of Novice Software Engineers’ Focus in Stack Overflow Posts',
    author:'Preetha Chatterjee, Minji Kong, Lori Pollock',
    year:'2020',
    synopsis: 'Journal of Systems and Software (JSS), Research Paper, Jan 2020.',
    abstract: 'Monthly, 50 million users visit Stack Overflow, a popular Q&A forum used by software developers, to share and gather knowledge and help with coding problems. Although Q&A forums serve as a good resource for seeking help from developers beyond the local team, the abundance of information can cause developers, especially novice software engineers, to spend considerable time in identifying relevant answers and suitable suggested fixes. This exploratory study aims to understand how novice software engineers direct their efforts and what kinds of information they focus on within a post selected from the results returned in response to a search query on Stack Overflow. The results can be leveraged to improve the Q&A forum interface, guide tools for mining forums, and potentially improve granularity of traceability mappings involving forum posts. We qualitatively analyze the novice software engineers’ perceptions from a survey as well as their annotations of a set of Stack Overflow posts. Our results indicate that novice software engineers pay attention to only 27% of code and 15–21% of text in a Stack Overflow post to understand and determine how to apply the relevant information to their context. Our results also discern the kinds of information prominent in that focus.',
    links: {
        Preprint: 'https://preethac.github.io/files/JSS_19.pdf',
        DOI: 'https://doi.org/10.1016/j.jss.2019.110454',
        Slides: 'https://www.slideshare.net/PreethaChatterjee1/finding-help-with-programming-errors-an-exploratory-study-of-novice-software-engineers-focus-in-stack-overflow-posts',
        Manuscript: null,
        Dataset: null
    }
},
{
    title: 'Exploratory Study of Slack Q&A Chats as a Mining Source for Software Engineering Tools',
    author:'Preetha Chatterjee, Kostadin Damevski, Lori Pollock, Vinay Augustine, and Nicholas A. Kraft',
    year:'2019',
    synopsis: 'The 16th International Conference on Mining Software Repositories (MSR), Research Track, May 2019. Montreal, Canada',
    abstract: 'Modern software development communities are increasingly social. Popular chat platforms such as Slack host public chat communities that focus on specific development topics such as Python or Ruby-on-Rails. Conversations in these public chats often follow a Q&A format, with someone seeking information and others providing answers in chat form. In this paper, we describe an exploratory study into the potential usefulness and challenges of mining developer Q&A conversations for supporting software maintenance and evolution tools. We designed the study to investigate the availability of information that has been successfully mined from other developer communications, particularly Stack Overflow. We also analyze characteristics of chat conversations that might inhibit accurate automated analysis. Our results indicate the prevalence of useful information, including API mentions and code snippets with descriptions, and several hurdles that need to be overcome to automate mining that information.',
    links: {
        Preprint: 'https://preethac.github.io/files/MSR19.pdf',
        DOI: 'https://dl.acm.org/citation.cfm?id=3341883.3341961',
        Slides: 'https://www.slideshare.net/PreethaChatterjee1/exploratory-study-of-slack-qa-chats-as-a-mining-source-for-software-engineering-tools',
        Manuscript: null,
        Dataset: null,
        Media: 'https://new.abb.com/news/detail/26145/mining-slack'
    }
},
{
    title: 'Extracting Code Segments and Their Descriptions from Research Articles',
    author:'Preetha Chatterjee, Benjamin Gause, Hunter Hedinger, and Lori Pollock',
    year:'2017',
    synopsis: 'The 14th International Conference on Mining Software Repositories (MSR), Research Track, May 2017. Buenos Aires, Argentina',
    abstract: 'The availability of large corpora of online software-related documents today presents an opportunity to use machine learning to improve integrated development environments by first automatically collecting code examples along with associated descriptions. Digital libraries of computer science research and education conference and journal articles can be a rich source for code examples that are used to motivate or explain particular concepts or issues. Because they are used as examples in an article, these code examples are accompanied by descriptions of their functionality, properties, or other associated information expressed in natural language text. Identifying code segments in these documents is relatively straightforward, thus this paper tackles the problem of extracting the natural language text that is associated with each code segment in an article. We present and evaluate a set of heuristics that address the challenges of the text often not being colocated with the code segment as in developer communications such as online forums.',
    links: {
        Preprint: 'https://preethac.github.io/files/MSR17.pdf',
        DOI: 'https://ieeexplore.ieee.org/document/7962359',
        Slides: 'https://www.slideshare.net/PreethaChatterjee1/extracting-code-segments-and-their-descriptions-from-research-articles',
        Manuscript: null,
        Dataset: null
    }
},
{
    title: 'What Information about Code Snippets Is Available in Different Software-Related Documents? An Exploratory Study',
    author:'Preetha Chatterjee, Manziba Akanda Nishi, Kostadin Damevski, Vinay Augustine, Lori Pollock, and Nicholas A. Kraft',
    year:'2017',
    synopsis: 'The 24th IEEE International Conference on Software Analysis, Evolution, and Reengineering (SANER), Early Research Achievements Track, Feb 2017. Klagenfurt, Austria',
    abstract: 'A large corpora of software-related documents is available on the Web, and these documents offer the unique opportunity to learn from what developers are saying or asking about the code snippets that they are discussing. For example, the natural language in a bug report provides information about what is not functioning properly in a particular code snippet. Previous research has mined information about code snippets from bug reports, emails, and Q&A forums. This paper describes an exploratory study into the kinds of information that is embedded in different software-related documents. The goal of the study is to gain insight into the potential value and difficulty of mining the natural language text associated with the code snippets found in a variety of software-related documents, including blog posts, API documentation, code reviews, and public chats.',
    links: {
        Preprint: 'https://preethac.github.io/files/SANER17.pdf',
        DOI: 'https://ieeexplore.ieee.org/document/7884638',
        Slides: null,
        Manuscript: null,
        Dataset: null
    }
},
{
    title: 'Exploring the Generality of a Java-based Loop Action Model for the Quorum Programming Language (Ph.D. Preliminary Project)',
    author:'Preetha Chatterjee',
    year:'2015',
    synopsis: 'University of Delaware',
    abstract: 'Many algorithmic steps require more than one statement to implement, but not big enough to be a method (e.g., add element, find the maximum, determine a value, etc.). These steps are generally implemented by loops. Internal comments for the loops often describe these intermediary steps, however, unfortunately a very small percentage of code is well documented to help new users/coders. As a result, information at levels of abstraction between the individual statement and the whole method is not leveraged by current source code analyses, as that information is not easily available beyond any internal comments describing the code blocks. Hence, this project explores the generality of an approach to automatically determine the high level actions of loop constructs. The approach is to mine loop characteristics of a given loop structure over the repository of the Quorum language source code, map it to an (already developed for Java) action identification model, and thus identify the action performed by the specified loop. The results are promising enough to conclude that this approach could be applied to other programming languages too.',
    links: {
        Preprint: null,
        DOI: null,
        Slides: null,
        Manuscript: 'https://arxiv.org/abs/1904.00478',
        Dataset: null
    }
}
]