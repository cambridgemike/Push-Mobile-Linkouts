Push Mobile Linkouts
====================

### Create your own

This library provides a way to convert web URLs into iOS URL scheme URLs. To add a linkout for a site, follow these simple instructions:

1.  Fork this GitHub repository and create a new branch
2.  Create a new class for your linkout and add two methods, `test` and `convert`
3.  The test method is passed the URL, it should return true or false. If the `convert` method applies to the content at this URL, then return true. Otherwise return false
4.  Implement a `convert` method. This method is passed the URL and a `pn` object. Perform whatever conversion is necessary, and ultimately set the variable `pn.data.appUrl` to the URL which will open the relevant URL in that app.
5.  Add your class to the `linkouts` array at the end of the file.
6.  Submit a Pull Request and enter any comments about how it works or dependencies it has.