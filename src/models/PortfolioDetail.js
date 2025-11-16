export default class PortfolioDetail {
    constructor(id,name, techStack, date, role, apkUrl, repoUrls, description, features, techUsed, image,slideToShow,slideToScroll,videos) {
        this.id = id;
        this.name = name;
        this.techStack = techStack;
        this.date = date;
        this.role = role;
        this.apkUrl = apkUrl;
        this.repoUrls = repoUrls;
        this.description = description;
        this.features = features;
        this.techUsed = techUsed;
        this.image = image;
        this.slideToShow = slideToShow;
        this.slideToScroll = slideToScroll;
        this.videos = videos;
    }
}
