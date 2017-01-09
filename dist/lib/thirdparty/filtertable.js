"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*====================================================
	- HTML Table Filter Generator v1.0
	- By Max Guglielmi
	- mguglielmi.free.fr
  - http://www.javascriptsource.com/repository/javascripts/2006/05/835271/TableFilter_EN.htm
  - modified by @noahedwardhall
  - thank me later
=====================================================*/

var TblId = [];
var StartRow = [];
var SearchFlt = [];

/*====================================================
- adds a filter (input) for each column (td)
- adds button on last column
=====================================================*/
function AddRow(id, n) {
  var t = document.getElementById(id);
  var fltrow = t.insertRow(0);
  var inpclass = "flt";
  for (var i = 0; i < n; i++) {
    var fltcell = fltrow.insertCell(i);
    var inp = document.createElement("input");
    inp.setAttribute("id", "flt" + i + "_" + id);
    inp.setAttribute("type", "text");
    //inp.setAttribute("class","flt"); //doesn't seem to work on ie<=6
    fltcell.appendChild(inp);

    if (i == n - 1) inpclass = "flt_s";
    var input = document.getElementById("flt" + i + "_" + id);
    input.className = inpclass;
    input.placeholder = 'Filter';
    input.addEventListener('keyup', Filter);
  }
}

/*====================================================
- returns text + text of child nodes of a cell
=====================================================*/
function getCellText(n) {
  var s = "";
  var enfants = n.childNodes;
  for (var i = 0; i < enfants.length; i++) {
    var child = enfants[i];
    if (child.nodeType == 3) s += child.data;else s += getCellText(child);
  }
  return s.toLowerCase();
}

/*====================================================
- returns starting row for Filter fn for a
given table id
=====================================================*/
function getStartRow(id) {
  var r = void 0;
  for (var j in TblId) {
    if (TblId[j] === id) r = StartRow[j];
  }
  return r;
}

/*====================================================
- checks passed node is a ELEMENT_NODE nodeType=1
- removes TEXT_NODE nodeType=3
=====================================================*/
function getChildElms(n) {
  if (n.nodeType == 1) {
    var enfants = n.childNodes;
    for (var i = 0; i < enfants.length; i++) {
      var child = enfants[i];
      if (child.nodeType == 3) n.removeChild(child);
    }
    return n;
  }
}

/*====================================================
- filter (input) ids are stored in this.SearchFlt
array
=====================================================*/
function getFilters(id) {
  SearchFlt = [];
  var t = document.getElementById(id);
  var tr = t.getElementsByTagName("tr")[0];
  var inp = tr.getElementsByTagName("input");

  for (var i = 0; i < inp.length; i++) {
    SearchFlt.push(inp[i].getAttribute("id"));
  }return SearchFlt;
}

/*====================================================
- returns number of cells in a row
- if nrow param is passed returns number of cells
of that specific row
=====================================================*/
function getCellsNb(id, nrow) {
  var t = document.getElementById(id);
  var tr = void 0;
  if (nrow == undefined) tr = t.getElementsByTagName("tr")[0];else tr = t.getElementsByTagName("tr")[nrow];
  var n = getChildElms(tr);
  return n.childNodes.length;
}

var filterTable = {
  /*====================================================
  - Checks if id exists and is a table
  - Calls fn that adds inputs and button
  =====================================================*/
  setFilterGrid: function setFilterGrid(id, ref_row) {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    var tbl = document.getElementById(id);
    if (tbl && tbl.nodeName.toLowerCase() === "table") {
      TblId.push(id);
      ref_row = ref_row === undefined ? StartRow.push(2) : StartRow.push(ref_row + 2);
      //let ncells = getCellsNb(id, ref_row);

      // AddRow(id, ncells);
    }
  },


  /*====================================================
  - gets search strings from this.SearchFlt array
  - retrieves data from each td in every single tr
  and compares to search string for current
  column
  - tr is hidden if all search strings are not
  found
  =====================================================*/
  Filter: function Filter(e) {
    if (typeof document === 'undefined') return;
    var id = e.target.getAttribute("id").split("_")[1];
    var SearchFlt = getFilters(id);
    var t = document.getElementById(id);
    var SearchArgs = [];
    var ncells = getCellsNb(id);

    for (var i in SearchFlt) {
      SearchArgs.push(document.getElementById(SearchFlt[i]).value.toLowerCase());
    }var start_row = getStartRow(id);
    var row = t.getElementsByTagName("tr");

    for (var k = start_row; k < row.length; k++) {
      /*** if table already filtered some rows are not visible ***/
      if (row[k].style.display === "none") row[k].style.display = "";

      var cell = getChildElms(row[k]).childNodes;
      var nchilds = cell.length;
      var isRowValid = true;

      if (nchilds === ncells) {
        // checks if row has exact cell #
        var cell_value = [];
        var occurence = [];

        for (var j = 0; j < nchilds; j++) // this loop retrieves cell data
        {
          var cell_data = getCellText(cell[j]);
          cell_value.push(cell_data);

          if (SearchArgs[j] !== "") {
            occurence[j] = cell_data.split(SearchArgs[j]).length;
          }
        } //for j

        for (var _t = 0; _t < ncells; _t++) {
          if (SearchArgs[_t] !== "" && occurence[_t] < 2) {
            isRowValid = false;
          }
        } //for t
      } //if

      if (isRowValid === false) row[k].style.display = "none";else row[k].style.display = "";
    } // for k
  }
};

exports.default = filterTable;