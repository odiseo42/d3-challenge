//I created 3 new shapes
var myShapes = {
  "happy face": "m49.69228,155.81757q58.80766,40.388 117.47805,0m-104.7326,-79.76713c0,-6.24194 5.06013,-11.30208 11.30208,-11.30208c6.24197,0 11.30206,5.06013 11.30206,11.30208c0,6.24201 -5.06009,11.30209 -11.30206,11.30209c-6.24195,0 -11.30208,-5.06007 -11.30208,-11.30209m69.52032,0c0,-6.24194 5.06017,-11.30208 11.30209,-11.30208c6.242,0 11.30211,5.06013 11.30211,11.30208c0,6.24201 -5.0601,11.30209 -11.30211,11.30209c-6.24193,0 -11.30209,-5.06007 -11.30209,-11.30209m-131.95805,32.44951l0,0c0,-59.92287 48.57708,-108.49995 108.49995,-108.49995c59.92291,0 108.50005,48.57708 108.50005,108.49995c0,59.92292 -48.57713,108.50005 -108.50005,108.50005c-59.92287,0 -108.49995,-48.57713 -108.49995,-108.50005zm0,0l0,0c0,-59.92287 48.57708,-108.49995 108.49995,-108.49995c59.92291,0 108.50005,48.57708 108.50005,108.49995c0,59.92292 -48.57713,108.50005 -108.50005,108.50005c-59.92287,0 -108.49995,-48.57713 -108.49995,-108.50005z",
  "chess knight": "m92.50304,255.9742c-8.58215,0.29179 -21.14339,-4.14241 -12.36834,-14.03416c9.55355,-3.76579 -1.69773,-16.24744 7.87649,-22.12698c7.68457,-10.94283 18.12881,-20.93584 21.28124,-34.29912c-0.4892,-9.06296 -11.30743,-14.42653 -6.14634,-24.45787c-5.06361,-16.05275 -3.89346,-34.52947 5.34914,-48.95953c7.84888,-13.40256 17.3778,-27.60365 16.37292,-43.82263c-9.8438,4.11059 -20.2635,7.71211 -31.09651,5.84534c-10.18539,-0.94591 -19.31967,7.30137 -29.70879,2.817c-10.53086,-2.18802 -16.79524,-16.2692 -8.94336,-24.50059c8.58117,-7.32961 21.18866,-7.56549 29.37222,-15.74558c10.79755,-8.94428 20.78416,-21.04188 35.66618,-22.62309c6.57729,-1.50582 9.39799,-8.1151 13.03849,-13.06815c3.02536,7.85562 8.28792,14.80208 16.20868,18.28467c16.10532,9.32896 20.11392,29.05153 26.05354,45.26444c4.39146,12.69743 8.04973,25.95449 15.40355,37.29014c0.07874,5.44035 -8.17566,7.73985 -2.60022,14.11765c2.89941,17.29757 3.02443,35.01054 2.76657,52.51031c-4.88947,8.56386 -9.3439,18.12234 -2.82069,27.95058c4.35703,12.01274 15.2097,19.89145 20.54895,31.22729c3.01851,5.86967 -5.88353,14.39153 5.20734,12.91528c10.12932,5.3589 1.94974,18.43965 -8.12347,14.63416c-37.75363,0.96007 -75.58896,1.91869 -113.33861,0.78091z",
  "apple logo": "m149.80013,1.225c-28.98882,5.33746 -38.60934,29.60964 -38.98383,43.47688c15.95119,1.15271 25.90807,-7.84939 29.98165,-13.11768c6.63499,-7.47004 8.25244,-17.99112 9.00218,-30.35921l0,0zm3.55809,47.94508c-20.95445,-0.00953 -32.65089,8.55611 -38.41817,8.6495c-6.61806,-0.51576 -25.90388,-8.27037 -37.14802,-8.39533c-39.38029,1.17407 -50.66335,43.96535 -50.17481,62.36635c3.20749,70.44189 46.19215,88.62267 53.21665,90.32339c5.63477,1.11101 24.63197,-8.68538 38.60698,-8.23955c15.25883,1.58972 25.92163,7.91989 32.04837,7.47711c7.75119,-0.53787 33.03587,-20.97185 40.65643,-52.45436c-15.36638,-12.99274 -24.84547,-24.76732 -25.69423,-35.94242c-0.3934,-5.05251 7.20595,-33.61342 19.32391,-41.6405c1.74921,-9.86935 -16.24977,-22.39244 -30.3593,-22.11139c-0.69508,-0.01868 -1.38199,-0.03246 -2.05782,-0.0328l0,0z"
};

//Initializing out app, giving it my 3 shapes and the div where we want to draw
d3Shapes.init("shape-drawer", myShapes);