# Simple Starter-Kit for 11ty

The standard-language of the templates is set on German. Please change it in the data-file "metadata.json", when necessary.

I included Bootstrap into the package.json - just in case.

The structure of the project was choesen after [watching a talk](https://www.youtube.com/watch?v=boZiLtx8p3Q) by Jérôme Coupé, He wrote is thoughts down in short and (in my view) important article: [Structuring Eleventy projects](https://www.webstoemp.com/blog/eleventy-projects-structure/)
## The variables in the frontmatter (or *.json)

- ``layout`` defines the used layout-file.
- ``title`` will become the page title and the content of ``h1``
- ``subline`` will become the subline (**optional**)
- ``permalink`` will overwrite the usual filename. This is an eleventy-variable.
- ``bodyClass`` will become the class of the ``body``-element
- ``eleventyNavigation`` has a least one attribute: ``key`` which sorts the page to a navigation category. A second possible option is ``order``. More about the navigation-plugin can be found [in the documentation](https://www.11ty.dev/docs/plugins/navigation/).

## Helpful 11ty-links

- [11ty documentation](https://www.11ty.dev/docs/)
- [Nunjucks templating](https://mozilla.github.io/nunjucks/templating.html)
- [11ty introduction](https://github.com/jeromecoupe/iad_eleventy_introduction/blob/master/eleventy_introduction_en.md)
- [Tips for debugging in 11ty](https://griffa.dev/posts/tips-for-debugging-in-11ty/)
- [Awesome Eleventy](https://github.com/chrissy-dev/awesome-eleventy)
- [11ty Plugin Repository](https://plug11ty.com/)
- [11ty Blog Posts by Bryan Robinson](https://bryanlrobinson.com/blog/category/11ty)
- [11ty Rocks!](https://11ty.rocks/)
- [11ty Recipes](https://11ty.recipes/)

## 11ty introductions
- [11ty: The Good, the Bad, and the... Possum?](https://www.aleksandrhovhannisyan.com/blog/eleventy-the-good-the-bad-and-the-possum/)
- [Basic custom taxonomies with Eleventy](https://www.webstoemp.com/blog/basic-custom-taxonomies-with-eleventy/)
- [How I got started with 11ty](https://griffa.dev/posts/how-i-got-started-with-11ty/)
- [Eleventy Walk Through ](https://rphunt.github.io/eleventy-walkthrough/)
- [A Complete Guide to Building a Blog with Eleventy](https://cfjedimaster.github.io/eleventy-blog-guide/guide.html)
- [Learn Eleventy From Scratch](https://learneleventyfromscratch.com/)


