# Simple Starter-Kit for 11ty

The standard-language of the templates is set on German. Please change it, when necessary.

I included Bootstrap into the package.json - just in case.

## The variables in the frontmatter (or *.json)

- ``layout`` defines the used layout-file.
- ``title`` will become the page title and the content of ``h1``
- ``subline`` will become the subline (**optional**)
- ``permalink`` will overwrite the usual filename. This is an eleventy-variable.
- ``bodyClass`` will become the class of the ``body``-element
- ``eleventyNavigation`` has a least one attribute: ``key`` which sorts the page to a navigation category. A second possible option is ``order``. More about the navigation-plugin can be found [in the documentation](https://www.11ty.dev/docs/plugins/navigation/).



