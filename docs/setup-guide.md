# Setup guide

This documentation will walk you through setting up a portfolio website with CodersCard project.

## Prerequisites

- [GitHub account](https://github.com/join)
- [Cloudinary account](https://cloudinary.com/users/register/free)
- [Netlify account](https://app.netlify.com/signup) - you can login with GitHub

## Setup

1. Fork [CodersCard](https://github.com/CodersCrew/CodersCard) to your account.

![Fork repository](./images/fork.png)

2. Go to [your Netlify account](https://app.netlify.com/) and click on the **New site from Git** button.

3. In Netlify, complete a quick 3-step process to setup your website.

- Choose GiHub for Continuous Development, then Authorize Netlify and it will get you to the second step.

- Click **Configure Netlify on GitHub** button, it will walk you throught installing Netlify app on GitHub. Install it on your account with the option for *Only selected repositories*, and select the `your-github-name`/CodersCard repository, it will get you back to Netlify website.

- Click on the **CodersCard** button on Netlify and it will get you to the third step.

- The default config is just fine so you can click the **Deploy site** button!

4. That's it, your site is being deployed! 🎉

![Deploy in progress](./images/deploy-in-progress.png)

The deploy can take a couple of minutes, please wait patiently and once it is done, it will change its status to **published**.

![Deploy published](./images/deploy-published.png)

5. Click on the published version, and then click on the **Preview deploy** text to navigate to your newly published website. You will find out that the website is up and running, now it's time to add your own content to it!

![Working website](./images/up-and-running.png)

## Integrate with Cloudinary

1. Log into your Cloudinary account and go to the Dashboard page.

2. Copy your `Cloud name` and `API Key` properties into the `config.yml` file (fields `cloud_name` and `api_key`).

![Cloudinary credentials](./images/cloudinary-console-details.png)

3. It's done. Now you will automatically use Cloudinary to manage and dynamically transform your graphics.

## Populate website with content

After you finished the Setup section, you can now populate the website with your own content.
In order to do so, you have to complete the following steps.

1. Go to [your Netlify account]((https://app.netlify.com/)) and navigate to **Site settings**, then select the **Identity** tab.

2. Scroll all the way to the bottom, where you find the **Services** section, there click **Enable Git Gateway**

3. Open up your newly hosted website again and navigate to `/admin` route on your website.
Wait a couple of seconds, it will take some time to initialize. Once it is ready, press the **Login with Netlify Identity** button.

4. You will have to Sign up, it is quick and you have to do it only once. After you sign up, you will get a confirmation email, click the confirmation link in the email. It will get you to the CMS where you will populate the website with your content.

5. Now you should be logged in and see something that looks as follows:

![CMS preview](./images/cms-view.png)

As you can see, there are 2 collections.

Now, click on the "Developer profile" card, it will get you to the editor where you can change the basic data about you. The data will be displayed on the card at the right side of every page.

![About collection](./images/developer-collection.png)

Now go through all the collections and replace the predefined information with your real information that you want to have included on your website. Remember that to modify images you need to be logged into your Cloudinary account (If you get some troubles when logging in, try to disable your ad block).

After you are done filling in information in a particular collection, remember to press the **Publish** button and then the **Publish now ->** option, this will trigger another build of your website and in a couple of minutes, it will be populated with new data.

![Publish](./images/publish.png)

On these pictures below, you can find about what each collection represents on the website.

### Developer profile

![Developer profile](./images/developer-profile.png)

### About me

![About me](./images/about-me.png)

### Portfolio
![Portfolio](./images/portfolio.png)

### Resume
![Resume](./images/resume.png)

### Site metadata

This is a special collection where you should provide an obligatory portion of metadata for your portfolio.

After you fill in all your information and publish your changes every time, you should see that your website has been updated, and you have your custom portfolio website! 🎉
