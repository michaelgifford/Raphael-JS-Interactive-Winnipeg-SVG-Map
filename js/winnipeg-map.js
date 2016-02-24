/* Interactive Map of Winnipeg SVG using the Raphael JavaScript framework
* Michael Gifford - Feb. 2016
* https://github.com/michaelgifford
*/
var raphaelMapPaths = Raphael('winnipeg-map', '606', '676');
var neighbourhoods = [];

// Generate paths from SVG
var The_Maples = raphaelMapPaths.path("M181,122.667V54l101.333-4.667V16h9.333V8l8-3l55.333,35   c0,0-0.001,12.333-26.667,23.833l-31.909,51.722l-5.55-3.805l-1.625,2.75l-11.75-6l-2.75,1.875c0,0-5.123-1-6.749-12.25l-17.376,1   c0,0-1.625,8.375,0.625,11.375v10.375L181,122.667z").attr({fill: '#5D9FD6',stroke: '#000000',"stroke-miterlimit": '10','stroke-width': '0','stroke-opacity': '1'});
The_Maples.attr({'id': 'The_Maples','name': 'The_Maples'}).data({'id': 'The_Maples', 'area-name': 'The Maples'});
neighbourhoods.push(The_Maples);

var Kildonan = raphaelMapPaths.path("M355.001,40c0,0,0.542,11.416-26.667,23.833   c0,0-46.209,74.292-45.334,74.542l22.875,12.25l7-11.75l22.375-22.625l20.875,10.375l3-3.125l15.957,8.755l7.918-5.13l-1.25-19.5   l3.125-3.625c0,0,12.125,4.75,16.875-2.25l14.125-19.5L355.001,40z").attr({fill: '#FBA919',stroke: '#000000',"stroke-miterlimit": '10','stroke-width': '0','stroke-opacity': '1'});
Kildonan.attr({'id': 'Kildonan','name': 'Kildonan'}).data({'id': 'Kildonan', 'area-name': 'Kildonan'});
neighbourhoods.push(Kildonan);

var River_East = raphaelMapPaths.path("M421,77.125l-19.25,24.625c0,0-4.5,6.375-16.875,2.25   l-3.125,3.625c0,0,6.375,6.5,19.625,5.125l-5,9.125l33.375,16.75c0,0,5.497,5.497,12.989-8.021   c0.087-0.157,0.174-0.316,0.261-0.479l8,16.375c0,0,0.75,5.125,13.375,4.75s71.25-0.625,71.25-0.625L421,77.125z").attr({fill: '#320A3E',stroke: '#000000',"stroke-miterlimit": '10','stroke-width': '0','stroke-opacity': '1'});
River_East.attr({'id': 'River_East','name': 'River_East'}).data({'id': 'River_East', 'area-name': 'River East'});
neighbourhoods.push(River_East);

var Rossmere = raphaelMapPaths.path("M381.75,107.625c0,0,6.75,6.625,19.625,5.125l-5,9.125   l33.375,16.75c0,0,5.625,5.375,13.25-8.5l8,16.375c0,0,2.625,5.664,12.75,4.77l29.001-0.384l-0.001,35.99h16.75V196l-9.5,4.625   h-3.625l-1,1.75h-9.25l-5.625,2.75h-20.625l-0.5-9.75l-14.875,5.75l-8.625-3.75L446.25,176l-13.625-6.75l-2.75,1.125   c0,0-5.875-11.875-9.375-12l-3.625,4.125l-34-17.5l-2.5,2.5l-15.125-8.125c0,0,8.5-6.625,17.75-12.25L381.75,107.625z").attr({fill: '#004D73',stroke: '#000000',"stroke-miterlimit": '10','stroke-width': '0','stroke-opacity': '1'});
Rossmere.attr({'id': 'Rossmere','name': 'Rossmere'}).data({'id': 'Rossmere', 'area-name': 'Rossmere'});
neighbourhoods.push(Rossmere);

var Transcona = raphaelMapPaths.path("M 509.5,186.875 584,186.875 599.166,219.333    599.166,253.833 561.666,253.833 562,289.667 494.333,290.833 492.666,260.833 495.833,253.333 494.166,227.667 508.166,227.333    506.833,211.5 510.666,208.167   z").attr({fill: '#8FC73E',stroke: '#000000',"stroke-miterlimit": '10','stroke-width': '0','stroke-opacity': '1'});
Transcona.attr({'id': 'Transcona','name': 'Transcona'}).data({'id': 'Transcona', 'area-name': 'Transcona'});
neighbourhoods.push(Transcona);

var Tyndall_Park = raphaelMapPaths.path("M 181,122.667 232.501,121.353 233.667,173.333    272.833,190.166 271,217 242.833,203.333 199,202.666 198.667,193 181,192.833   z").attr({fill: '#188140',stroke: '#000000',"stroke-miterlimit": '10','stroke-width': '0','stroke-opacity': '1'});
Tyndall_Park.attr({'id': 'Tyndall_Park','name': 'Tyndall_Park'}).data({'id': 'Tyndall_Park', 'area-name': 'Tyndall Park'});
neighbourhoods.push(Tyndall_Park);

var Burrows = raphaelMapPaths.path("M232.501,121.353l1.166,51.979l49.321,21l13.346-29.667   l-3.667-2.667l3.667-6.5l2.333,0.876l4.333-7.29l-20-10.71l13.425-22.82l-5.55-3.805l-1.625,2.75l-11.75-6l-2.75,1.875   c0,0-5.582-0.124-6.749-12.25l-17.376,1c0,0-1.959,8.043,0.625,11.375v10.375L232.501,121.353z").attr({fill: '#4A161D',stroke: '#000000',"stroke-miterlimit": '10','stroke-width': '0','stroke-opacity': '1'});
Burrows.attr({'id': 'Burrows','name': 'Burrows'}).data({'id': 'Burrows', 'area-name': 'Burrows'});
neighbourhoods.push(Burrows);

var St_Johns = raphaelMapPaths.path("M305.875,150.625l7-11.75l22.375-22.625l20.875,10.375l3-3.125   l15.957,8.755l-9.832,7.12c0,0-6.748,0.875-2.248,17c0,0,3.334,8.959-3.166,13.959l-6,7.667l-5.334-2.667L345.669,178l-3.5-3l-3,3   l-40.502-21.625l4.333-7.29").attr({fill: '#EF3F3E',stroke: '#000000',"stroke-miterlimit": '10','stroke-width': '0','stroke-opacity': '1'});
St_Johns.attr({'id': 'St._Johns','name': 'St_Johns'}).data({'id': 'St_Johns', 'area-name': 'St. Johns'});
neighbourhoods.push(St_Johns);

var Elmwood = raphaelMapPaths.path("M365.25,139.375l15.125,8.125l2.5-2.5l34,17.5l-44.707,58.167   l-29.333-19.5c0,0-14.167-9.5,3.333-19.833l7.668-3.334l7.268-8.824c0,0,4.732-4.427,1.898-12.801   C363.002,156.375,358.665,140.749,365.25,139.375z").attr({fill: '#774D9F',stroke: '#000000',"stroke-miterlimit": '10','stroke-width': '0','stroke-opacity': '1'});
Elmwood.attr({'id': 'Elmwood','name': 'Elmwood'}).data({'id': 'Elmwood', 'area-name': 'Elmwood'});
neighbourhoods.push(Elmwood);

var Concordia = raphaelMapPaths.path("M420.5,158.375l-48.332,62.292l-0.998,5.833l13.166,1.333   l38.834,10.167l4.333-9.167l-5-3.5L446.25,176l-13.625-6.75l-2.75,1.125C429.875,170.375,423.664,158.583,420.5,158.375z").attr({fill: '#00C2F2',stroke: '#000000',"stroke-miterlimit": '10','stroke-width': '0','stroke-opacity': '1'});
Concordia.attr({'id': 'Concordia','name': 'Concordia'}).data({'id': 'Concordia', 'area-name': 'Concordia'});
neighbourhoods.push(Concordia);

var Radisson = raphaelMapPaths.path("M 423.17,238.001 427.503,228.834 422.503,225.334    435.875,197.375 444.5,201.125 459.375,195.375 459.875,205.125 480.5,205.125 486.125,202.375 495.375,202.375 496.375,200.625    500,200.625 509.5,196 510.666,208.167 506.833,211.5 508.166,227.333 494.166,227.667 495.833,253.333 492.666,260.833    494.333,290.833 494.17,363.833 459.503,363.833 459.836,328.5 405.503,329.166 394.836,324.833 390.003,323.5 385.67,320.5    389.003,319.333 385.67,316.166 390.003,313.333 384.336,311.5 389.17,308.666 377.17,295 424.836,293.666 423.336,238.854   z").attr({fill: '#384E23',stroke: '#000000',"stroke-miterlimit": '10','stroke-width': '0','stroke-opacity': '1'});
Radisson.attr({'id': 'Radisson','name': 'Radisson'}).data({'id': 'Radisson', 'area-name': 'Radisson'});
neighbourhoods.push(Radisson);

var Point_Douglas = raphaelMapPaths.path("M282.988,194.333l13.346-29.667l-3.667-2.667l3.667-6.5   L339.169,178l3-3l3.5,3l2.833-2.667l5.334,2.667c0,0-27.836,9.335-11.001,23.167l25.33,16.839c0,0-2.494,6.826-8.161,6.493   l-10,0.012c0,0-16-1.345-17.5,6.988l-0.167,6.501c0,0-15.167,1.332-11.167-9.168l6.5-14.667L282.988,194.333z").attr({fill: '#CB9C66',stroke: '#000000',"stroke-miterlimit": '10','stroke-width': '0','stroke-opacity': '1'});
Point_Douglas.attr({'id': 'Point_Douglas','name': 'Point_Douglas'}).data({'id': 'Point_Douglas', 'area-name': 'Point Douglas'});
neighbourhoods.push(Point_Douglas);

var St_Boniface = raphaelMapPaths.path("M371.17,226.501l13.166,1.333l38.834,10.167l1.666,55.665   L377.17,295l7.614,8.672c0,0-4.28,4.161-9.614-1.339l-12.667,7.333c0,0,2.001-10.333-9.333-14.667c0,0-8.166-2-13.5,1.5   c0,0-18.5,8.333-15.167-10.5c0,0,1.166-9,14.833-24.5c0,0,4.833-9.167-1-15.833l-5.999-7.665c0,0-2.745-13.141,10.877-13.319   l16.79-0.182c0,0,5.156,0.681,8.161-6.493l4.003,2.661L371.17,226.501z").attr({fill: '#8C6977',stroke: '#000000',"stroke-miterlimit": '10','stroke-width': '0','stroke-opacity': '1'});
St_Boniface.attr({'id': 'St._Boniface','name': 'St_Boniface'}).data({'id': 'St._Boniface', 'area-name': 'St. Boniface'});
neighbourhoods.push(St_Boniface);

var Logan = raphaelMapPaths.path("M271,217l1.833-26.833l54.836,24l-6.5,14.667   c0,0-4.997,9.503,11.167,9.168l5.999,7.665c0,0,5.835,5.667,1,15.833c0,0-9.019-3.16-13.76,2.336l-6.575,3.83   c0,0-4.332,3.5-3.166-2.167l-1.834-5L308,261.833l-7.332-17l-5.5,1l0.333-17.5L271,217z").attr({fill: '#4D4E99',stroke: '#000000',"stroke-miterlimit": '10','stroke-width': '0','stroke-opacity': '1'});
Logan.attr({'id': 'Logan','name': 'Logan'}).data({'id': 'Logan', 'area-name': 'Logan'});
neighbourhoods.push(Logan);

var Fort_Rouge = raphaelMapPaths.path("M287.625,326.625l-5.5-8.625l3.875-4.375l-13.5-21.25   c0,0,2.5-4.625,0-7.5l11.75-6.375L295,291.875c0,0,10.25,9.375,6.75-3.625l-3.5-10.875c0,0-2.75-5.75,3-5.75   c0,0,12.875-0.029,15.375-2.89l8.951-4.899c0,0,4.846-4.962,13.76-2.336c0,0-16.508,18.5-15.234,29.125c0,0-2.102,3-4.602,1.875   l-4.875,15.5c0,0-1.75,6.375-5.75,7.5L287.625,326.625z").attr({fill: '#F2B6B6',stroke: '#000000',"stroke-miterlimit": '10','stroke-width': '0','stroke-opacity': '1'});
Fort_Rouge.attr({'id': 'Fort_Rouge','name': 'Fort_Rouge'}).data({'id': 'Fort_Rouge', 'area-name': 'Fort Rouge'});
neighbourhoods.push(Fort_Rouge);

var Wolseley = raphaelMapPaths.path("M295.168,245.833H269.25v18.003l-31.75,10.539v7   c0,0,7.625,2.083,11.625-1.771c0,0,9.375-5.229,11.625,1.646c0,0,5.283,7.206,11.125,4l12.375-6.75L295,291.875   c0,0,10.125,8.875,6.75-3.625l-3.5-10.875c0,0-2.905-5.458,3-5.75s14.25-0.529,15.375-2.89c0,0-1.705-1.236-0.79-3.236l-1.834-5   L308,261.833l-7.332-17L295.168,245.833z").attr({fill: '#336366',stroke: '#000000',"stroke-miterlimit": '10','stroke-width': '0','stroke-opacity': '1'});
Wolseley.attr({'id': 'Wolseley','name': 'Wolseley'}).data({'id': 'Wolseley', 'area-name': 'Wolseley'});
neighbourhoods.push(Wolseley);

var Minto = raphaelMapPaths.path("M 269.25,245.833 295.168,245.833 295.501,228.333    242.833,203.333 242.833,272.604 269.167,263.836   z").attr({fill: '#E2E6AB',stroke: '#000000',"stroke-miterlimit": '10','stroke-width': '0','stroke-opacity': '1'});
Minto.attr({'id': 'Minto','name': 'Minto'}).data({'id': 'Minto', 'area-name': 'Minto'});
neighbourhoods.push(Minto);

var Southdale = raphaelMapPaths.path("M494.17,363.833h-34.667l0.333-35.333l-54.333,0.667l-15.5-5.667   c0,0-3.168,13.002-2.168,16.335s13.333,17.167,14.333,17.167s1.166,7.333-0.167,8.667s-2.667,8.501,0,10.834s4.5,5.834,4.5,7   s-2.334,6.833,1,9.333s5.5,5.834,5.167,9.667s1.501,6.667,5.167,8.5s0.5,6.166,1.333,7.166s1.999,3.667,6.499,4.667s4,6,4,6   s1,4.334,5.667,7.167s2.833,8.667,2.833,8.667s0.168,6.166,5.751,8.166s4.249,6.667,4.249,6.667s0.836,2.5,5.502,3.5   s7.333,9,7.333,9l2.833,6.667l19-13.5h11.335l1.665,0.167V364.502").attr({fill: '#8E9A39',stroke: '#000000',"stroke-miterlimit": '10','stroke-width': '0','stroke-opacity': '1'});
Southdale.attr({'id': 'Southdale','name': 'Southdale'}).data({'id': 'Southdale', 'area-name': 'Southdale'});
neighbourhoods.push(Southdale);

var St_Vital= raphaelMapPaths.path("M362.503,309.666l12.667-7.333c0,0,4.398,5.176,9.614,1.339   l4.386,4.995l-4.834,2.833l5.667,1.833l-4.333,2.833l3.333,3.167l-3.333,1.167l4.333,3c0,0-6.634,15.639,1.682,22.153   l10.483,11.349c0,0,2.027,4.629-0.987,10.231c0,0-2.344,7.697,1.654,10.066c0,0,3.877,5.047,3.666,6.203   c0,0-13.827-4.502-29.331,13.332l-9.837-14.166l-5.667,2.666l2.167-6.166L358,369.501c0,0-2.833-3.167,0-8   c0,0,2.982-5.169-1.259-11.918c0,0-9.573-12.252-14.573-17.085C342.168,332.498,358.501,329.331,362.503,309.666z").attr({fill: '#F1853E',stroke: '#000000',"stroke-miterlimit": '10','stroke-width': '0','stroke-opacity': '1'});
St_Vital.attr({'id': 'St._Vital','name': 'St_Vital'}).data({'id': 'St._Vital', 'area-name': 'St. Vital'});
neighbourhoods.push(St_Vital);

var Riel = raphaelMapPaths.path("M342.168,332.498c0,0-10.168,2.833-17.334,2.333   c0,0-11.834-1.167-10.5,7.167c0,0,0,6.333,7.5,2.833c0,0,10.5-8.667,16-2.333l11.834,10.333c0,0,10.332,12.5-4.834,12.167   c0,0-21.834-10.833-18,4.5l6.833,8.667c0,0,6.835,10.501-5.499,11.834c0,0-20.5-7.167-18,5.333l5.666,12.167   c0,0,3.334,5.166,3.334,9.666c0,0,0.333,15.668,9.833,15.834c0,0,9.666,1.499,16.833-7.334c0,0,13.001-7.499,14.834,3.334   c0,0,2.333,6.166-4.167,9.5c0,0-19.333,7.834-15.833,14.834c0,0,12.502,10.333,16.168,11l6.666-3.832l-0.833-2.834   c0,0,8.666-0.334,9.833-4s6.167-4.666,6.167-4.666l-2.833-4.167l17.333-11.167l-8.167-12.333l1-8.833l-8.832-15.666l-9.837-14.166   l-5.667,2.666l2.167-6.166L358,369.501c0,0-3.002-3.499,0-8c0,0,2.912-6.704-1.259-11.918L342.168,332.498z").attr({fill: '#802046',stroke: '#000000',"stroke-miterlimit": '10','stroke-width': '0','stroke-opacity': '1'});
Riel.attr({'id': 'Riel','name': 'Riel'}).data({'id': 'Riel', 'area-name': 'Riel'});
neighbourhoods.push(Riel);

var Fort_Garry__Riverview  = raphaelMapPaths.path("M287.625,326.625l21.25-11.125c0,0,3.703-0.99,5.75-7.5   l4.875-15.5c0,0,2.369,0.918,4.602-1.875c0,0-0.096,12.542,15.568,5.875c0,0,4.669-3.666,13.5-1.5c0,0,10.835,4.001,9.333,14.667   c0,0-2.834,17.998-20.335,22.832c0,0-12.001,3-17.334,2.333c0,0-11.833-1.001-10.5,7.167c0,0,0.5,5.5,7.5,2.833   c0,0,10.833-8.334,16-2.333l11.834,10.333c0,0,10.166,12.333-4.834,12.167c0,0-21.833-11.167-18,4.5c0,0,18.335,18.333,1.334,20.5   c0,0-5.719-1.676-8.02-1.854c0,0-1.402-6.646-10.191-3.479l-11.456,7.333l-1,28.5h-6.667l-24.167,13l-4.5-6.166v-27l-0.667-5.167   c0,0-4.333-6.5-2-10l1.5-2.333v-25l0.5-14.333c0,0,3.834,2.167,6.667,0.667l23-10.667L287.625,326.625z").attr({fill: '#2A338A',stroke: '#000000',"stroke-miterlimit": '10','stroke-width': '0','stroke-opacity': '1'});
Fort_Garry__Riverview.attr({'id': 'Fort_Garry_-_Riverview','name': 'Fort_Garry__Riverview'}).data({'id': 'Fort_Garry_-_Riverview', 'area-name': 'Fort Garry - Riverview'});
neighbourhoods.push(Fort_Garry__Riverview);

var Seine_River  = raphaelMapPaths.path("M356.836,464.332l6.666-3.832l-0.833-2.834   c7.003-0.167,9.833-4,9.833-4c0.836-3.834,6.167-4.666,6.167-4.666l-2.833-4.167l17.333-11.167l-8.167-12.333l1-8.833   l-8.832-15.666c12.337-15.999,29.331-13.332,29.331-13.332c-2.999,8.502,1,9.333,1,9.333c5.168,3.835,5.167,9.667,5.167,9.667   c-0.498,5.002,5.167,8.5,5.167,8.5c3.502,0.336,1.333,7.166,1.333,7.166c2.002,3.168,6.499,4.667,6.499,4.667c4.167,0.002,4,6,4,6   c0.761,3.669,5.667,7.167,5.667,7.167c4.501,2.669,2.833,8.667,2.833,8.667c0.327,5.918,5.751,8.166,5.751,8.166   c5.418,1.502,4.249,6.667,4.249,6.667c1.001,2.169,5.502,3.5,5.502,3.5c6.169,3.669,10.166,15.667,10.166,15.667   c-2.667,25.84,3.166,23.996,3.166,23.996s9.833,0.333,7.833,2s-3,13.333-3,13.333l-59.501,32.334v22.667L347,607.499   c0,0,0.668-19.67-3.665-23.003c0,0-19.001-10.334-17.167-24.167c0,0,3.5-26.166-0.833-31.666c0,0-2.999-7.167-6.333-2.667   c0,0-11.334,13.167-14.334,6.5c0,0-4.256-4.833,5.289-10.833c0,0,8.377-4.333,12.211-4c0,0,17.666,1.166,16-7.167   c0,0,0.666-4.834-3-7.667c0,0-6.5-5.666-2.833-13.166l7-16.5c0,0,2.833-10.668,7-3.501c0,0,4.122,5.834,5.228,7.167   s10.63,4.874,9.439-4.667S356.836,464.332,356.836,464.332z").attr({fill: '#8FD4D7',stroke: '#000000',"stroke-miterlimit": '10','stroke-width': '0','stroke-opacity': '1'});
Seine_River.attr({'id': 'Seine_River','name': 'Seine_River'}).data({'id': 'Seine_River', 'area-name': 'Seine River'});
neighbourhoods.push(Seine_River);

var Fort_Richmond = raphaelMapPaths.path("M297.5,420.498l1-28.5l11.456-7.333c0,0,7.673-3.543,10.191,3.479   c0,0-11.812-2.315-9.98,7.187l5.666,12.167c0,0,3.725,5.413,3.445,11.291c0,0,1.389,27.539,26.555,6.875   c0,0,13.002-7.835,14.834,3.334c0,0,2.081,6.478-4.167,9.5c0,0-19.165,7.499-15.833,14.834c0,0,9.837,8.499,16.168,11   c0,0,3.834-0.341,4.166,7.83c0,0,2.017,10.558-9.439,4.667l-5.228-7.167c0,0-3.832-7.669-7,3.501l-7,16.5   c0,0-3.381,5.191,1.013,11.037l-31.681,17.632l-1.5-16.834l-4.5,2.167L297.5,420.498z").attr({fill: '#ECE83F',stroke: '#000000',"stroke-miterlimit": '10','stroke-width': '0','stroke-opacity': '1'});
Fort_Richmond.attr({'id': 'Fort_Richmond','name': 'Fort_Richmond'}).data({'id': 'Fort_Richmond', 'area-name': 'Fort Richmond'});
neighbourhoods.push(Fort_Richmond);

var River_Heights = raphaelMapPaths.path("M237.5,281.375c0,0,6.875,1.833,11.625-1.771   c0,0,7.112-4.482,10.805,0c0,0,5.219,9.315,11.945,5.646c0,0,3.125-0.125,0.625,7.125l13.5,21.25L282.125,318l9.042,15.499   l-23,10.667c0,0-2.167,1.832-6.667-0.667l-0.096,2.752L237.5,350.75l-0.75-3.125l-5.5-0.375l1.875-48.5l-6.75-1.125   c0,0-0.75-10.75-2-11.625C224.375,286,231.75,281.625,237.5,281.375z").attr({fill: '#803920',stroke: '#000000',"stroke-miterlimit": '10','stroke-width': '0','stroke-opacity': '1'});
River_Heights.attr({'id': 'River_Heights','name': 'River_Heights'}).data({'id': 'River_Heights', 'area-name': 'River Heights'});
neighbourhoods.push(River_Heights);

var St_Norbert = raphaelMapPaths.path("M206.334,670.998l139.816-79.412c0,0-0.352-6.55-6.334-9.318   c0,0-16.038-9.794-13.594-22.364c0,0,2.292-21.861,0.368-28.383c0,0-3.278-9.843-7.589-5.524c0,0-10.5,12.497-14.334,6.5   c0,0-3.754-5.669,5.289-10.833c0,0,8.717-4.035,12.211-4c0,0,24.834,2.496,13-14.834l-1.82-2.129l-31.681,17.632l-1.5-16.834   l-4.5,2.167l1.834-83.167h-7.5l-23.333,13l6.333,11.67l-0.5,16.5l-60.667,34.5v81l-7.5,0.333L206.334,670.998z").attr({fill: '#EE499A',stroke: '#000000',"stroke-miterlimit": '10','stroke-width': '0','stroke-opacity': '1'});
St_Norbert.attr({'id': 'St._Norbert','name': 'St_Norbert'}).data({'id': 'St._Norbert', 'area-name': 'St. Norbert'});
neighbourhoods.push(St_Norbert);

var Fort_Whyte = raphaelMapPaths.path("M237.5,350.75l23.904-4.499L261,382.832c0,0-5,4.332,0.5,12.333   l0.667,32.167l4.5,6.166l6.333,11.67l-0.5,16.5l-60.667,34.5V473l-9.002-0.667v-9L201.166,461l1.5-2.334l-1.5-27.666l-4.167,3.833   h-18l1.167-72.771L237.5,350.75z").attr({fill: '#B8C5E5',stroke: '#000000',"stroke-miterlimit": '10','stroke-width': '0','stroke-opacity': '1'});
Fort_Whyte.attr({'id': 'Fort_Whyte','name': 'Fort_Whyte'}).data({'id': 'Fort_Whyte', 'area-name': 'Fort Whyte'});
neighbourhoods.push(Fort_Whyte);

var Tuxedo = raphaelMapPaths.path("M180.166,362.062L237.5,350.75l-0.75-3.125l-5.5-0.375l1.875-48.5   l-6.75-1.125c0,0-0.728-10.562-2-11.625c0,0-4.378-2.167-6.378,0s-0.328,8.501-9.164,5.501c0,0-3.169-0.978-7.169,2.178   c0,0-7,3.155-11.333-1.345c0,0-8.667-7.5-15.833-2.5l-5.667,0.791l-6,0.876c0,0-4.667,2.522-8.333,2.178c0,0-5.833-1.345-8.5,2.655   c0,0-6,4.5-10.5,4l-6.333-0.5l-0.667,9.832l9.833-2.332l-2.5,56l6.667,1l-0.5,4L180.166,362.062z").attr({fill: '#144D32',stroke: '#000000',"stroke-miterlimit": '10','stroke-width': '0','stroke-opacity': '1'});
Tuxedo.attr({'id': 'Tuxedo','name': 'Tuxedo'}).data({'id': 'Tuxedo', 'area-name': 'Tuxedo'});
neighbourhoods.push(Tuxedo);

var St_James = raphaelMapPaths.path("M181,192.833L198.667,193l0.333,9.667l43.833,0.667v69.272   l-5.333,1.771v7c0,0-5.082,0.042-13.125,4.625c0,0-6.71-2.5-6.378,0c0,0-1.327,9.002-9.164,5.501c0,0-3.168-0.811-7.169,2.178   c0,0-6.195,4.738-13.765-3.054c0,0-7.9-4.957-13.402-0.791l-11.667,1.667c0,0-6,2.391-8.333,2.178c0,0-3.06-1.488-4.364,0   l-2.304-5.179l-7.333,3l-7-0.875l1-24.125l35.5,0.667l1.167-73.666L181,192.833z").attr({fill: '#E1ACCF',stroke: '#000000',"stroke-miterlimit": '10','stroke-width': '0','stroke-opacity': '1'});
St_James.attr({'id': 'St._James','name': 'St_James'}).data({'id': 'St._James', 'area-name': 'St. James'});
neighbourhoods.push(St_James);

var Assiniboia = raphaelMapPaths.path("M171.163,193.5h-42.666l2.665-34.166H75.829l0.833,6.5   l-33.5,0.333l2.5,13.667c0,0,1,12.667-1.667,17.167l-0.833,39.333l-36.167,2.5l-1,48.167l66.667-14.396l10.5,5.007l1.167-16.61   l31.167,0.167l10.667,6.5l8.333-1.168l35.5,0.667L171.163,193.5z").attr({fill: '#0F2132',stroke: '#000000',"stroke-miterlimit": '10','stroke-width': '0','stroke-opacity': '1'});
Assiniboia.attr({'id': 'Assiniboia','name': 'Assiniboia'}).data({'id': 'Assiniboia', 'area-name': 'Assiniboia'});
neighbourhoods.push(Assiniboia);

var Kirkland_Park = raphaelMapPaths.path("M134.496,266.5l-1,24.125l7,0.875l7.333-3l2.304,5.179   c0,0-2.635-0.345-4.136,2.655s0.332,0.667,0.332,0.667s-8.998,4.333-10.832,3.333l-6.333-0.5c0,0-10.834,8.667-15.834,4.333   c0,0-5.333-3.833-5.667,9.167c0,0,7,14.167,0,16.5c0,0-6.167,3.667-11.667-6.833c0,0-1.5-4.5-9.167-3.5s-7.667,0.167-7.667,0.167   l-11.167-4.667c0,0-9.857,0.477-9.541-6.333c0.008-0.163,0.021-0.329,0.041-0.5l-5-6.167c0,0-6.833-5.333-10.833,2l-4.333,3.667   l-20.5,8.833l0.785-32.225l54.048-11.671l10.5,5.007l1.167-16.61l31.167,0.167l10.667,6.5L134.496,266.5z").attr({fill: '#58B37D',stroke: '#000000',"stroke-miterlimit": '10','stroke-width': '0','stroke-opacity': '1'});
Kirkland_Park.attr({'id': 'Kirkland_Park','name': 'Kirkland_Park'}).data({'id': 'Kirkland_Park', 'area-name': 'Kirkland Park'});
neighbourhoods.push(Kirkland_Park);

var Charleswood = raphaelMapPaths.path("M5.667,448.667l73.667-1.167V442l34,0.667v-4.333h34.833V434   l30.832,0.833l1.167-72.771l-38.168,6.272l0.5-4l-6.667-1l2.5-56l-9.833,2.332l0.667-9.832c0,0-10.506,8.668-15.834,4.333   c0,0-5.504-3.665-5.667,9.167c0,0,7.329,13.002,0,16.5c0,0-5.505,4.001-11.667-6.833c0,0-2.004-4.832-9.167-3.5l-7.667,0.167   l-11.167-4.667c0,0-9.252,0.502-9.541-6.333s0.041-0.5,0.041-0.5l-5-6.167c0,0-6.504-5.332-10.833,2l-4.333,3.667L43,335.166   l-1.167,43.667L33,382.166l-25,0.333L5.667,448.667z").attr({fill: '#998C73',stroke: '#000000',"stroke-miterlimit": '10','stroke-width': '0','stroke-opacity': '1'});
Charleswood.attr({'id': 'Charleswood','name': 'Charleswood'}).data({'id': 'Charleswood', 'area-name': 'Charleswood'});
neighbourhoods.push(Charleswood);

// Path Manipulation 
for(var i = 0; i < neighbourhoods.length; i++){ // Iterate through naighbourhoods array of paths
	
	neighbourhoods[i].mouseover(function(e) { // Display neighbourhood name and fade on mouseover
		this.node.style.opacity = 0.6;
		var displayName = this.data('area-name');
		document.getElementById('neighbourhood-name').innerHTML = "Current Hovered Area: " + displayName;
	});
	neighbourhoods[i].mouseout(function(e){ // Unfade neighbourhood on mouseout
		this.node.style.opacity = 1;
		document.getElementById('neighbourhood-name').innerHTML = "Current Hovered Area: ";
	});
	neighbourhoods[i].mousedown(function(e){
		var xPosition;
		var yPosition;

		if (typeof e !== 'undefined') {
			xPosition = e.pageX - $('#winnipeg-map').offset().left - 15;
			yPosition = e.pageY - $('#winnipeg-map').offset().top + 47.5;
		} else {
			xPosition = parseInt(neighbourhoods[i].getBBox().x, 10) - 260;
			yPosition = parseInt(neighbourhoods[i].getBBox().y, 10) - 57;
		}
		$('.popup-box').css({'top': yPosition + 'px', 'left': xPosition + 'px' });
		$('.popup-box').find('.popup-box_title').text(this.data('area-name'));
	});
	$('.popup-box').on('click', '.popup-box_close', function(e){
		$('.popup-box').css({'top' : '-9999px', 'left' : '-9999px'});
		e.preventDefault();
		e.stopPropagation();
	});
}
