# paytm_insider
The following website is hosted on AWS EC2 : http://ec2-3-17-157-239.us-east-2.compute.amazonaws.com:5000/topstories
For viewing of comment click on the "Comment" and it will show you the comments
For viewing topStories click on navigation bar that says "Top Stories".
For viewing PastStories click on navigation bar that says "Past Stories".

Architecture of the App:
1. This Node App use Redis as a cache that store top 10 stories for 10 mins and copies the data to MongoDB cloud.
2. For each user that visits the website within these 10 mins no API is made to HackerNew API but the data is served from local cache.
3. This app use Angular with TypeScript as Frontend and use concept of Routing for Single Page Application(SPA).
4. Backend is written in Nodejs with Express framework
5. DB used is MongoDB.
6. DB only stores minimum required information to avoid running out of disk.
7. Redis use SET datastructure that have a life of 600 secs or 10 mins after that new data is populated within the set.
8. Frontend uses Bootswatch Darly theme.
9. Developer email is devanshu.litoria@gmail.com
10.Screenshots are also attached.