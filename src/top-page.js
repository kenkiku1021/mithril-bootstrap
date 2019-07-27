import m from "mithril";

const TopPage = {
    view: function() {
	return m(".container", [
	    m("h1", "Top Page"),
	    m("p", [
		"This is top page contents."
	    ]),
	    m(m.route.Link, {href: "/second", class: "btn btn-primary"}, "Second Page"),
	    m("p.my-style", [
		"my-style text"
	    ]),
	]);
    }
}

export default TopPage;
