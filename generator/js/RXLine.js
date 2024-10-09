
      // auto generated
      //var self;

      // class constructor:
      function RXLine() {
        

        // should be RXLine_BaseJs.call(this, engine):
        //RXLine.prototype = new RXLine_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RXLine.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RXLine);
            //}
          }
          else {
            qWarning("RXLine.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RXLine_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RXLine);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RXLine);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RXLine_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RXLine);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RXLine);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RXLine_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RXLine);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RXLine);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RXLine_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RXLine);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine(): wrong number / type of arguments");
      
    console.trace();
  }
  
        }

        //self = this;
        //if (typeof(this.wrapper)!=="undefined") {
        //  this.wrapper.setEngine(engine);
        //}


        if (typeof(wrapper)!=="undefined") {
          //var localSelf = this;
          //print("QAction self:", localSelf);
          // TODO:
          //this.wrapper.triggered.connect(function(checked) { print("action triggered. self:", localSelf); localSelf.triggeredEmitter(checked); });
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
          }
        }
      }

      //RXLine.prototype = new RXLine_BaseJs(engine);
      //RXLine.prototype = new RXLine_Wrapper(engine);
      RXLine.prototype = new Object();

      RXLine.prototype.toString = function() {
          //return "RXLine [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RXLine [JS]";
        };
      RXLine.getObjectType = function() {
        return RJSType_RXLine.getIdStatic();
      };

      RXLine.prototype.getObjectType = function() {
        return RJSType_RXLine.getIdStatic();
      };

      RXLine.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RXLine.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RShape.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RXLine.Unknown = RXLine_Wrapper.Unknown;
RXLine.Point = RXLine_Wrapper.Point;
RXLine.Line = RXLine_Wrapper.Line;
RXLine.Arc = RXLine_Wrapper.Arc;
RXLine.Circle = RXLine_Wrapper.Circle;
RXLine.Ellipse = RXLine_Wrapper.Ellipse;
RXLine.Polyline = RXLine_Wrapper.Polyline;
RXLine.Spline = RXLine_Wrapper.Spline;
RXLine.Triangle = RXLine_Wrapper.Triangle;
RXLine.XLine = RXLine_Wrapper.XLine;
RXLine.Ray = RXLine_Wrapper.Ray;


      // functions:
      

      // static functions:
      

        // static function 
        RXLine.isPointShape = function() 
          
        {
          //print("JS: RXLine.isPointShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.isPointShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.isPointShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.isLineShape = function() 
          
        {
          //print("JS: RXLine.isLineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.isLineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.isLineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.isArcShape = function() 
          
        {
          //print("JS: RXLine.isArcShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.isArcShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.isArcShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.isCircleShape = function() 
          
        {
          //print("JS: RXLine.isCircleShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.isCircleShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.isCircleShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.isEllipseShape = function() 
          
        {
          //print("JS: RXLine.isEllipseShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.isEllipseShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.isEllipseShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.isFullEllipseShape = function() 
          
        {
          //print("JS: RXLine.isFullEllipseShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.isFullEllipseShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.isFullEllipseShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.isPolylineShape = function() 
          
        {
          //print("JS: RXLine.isPolylineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.isPolylineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.isPolylineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.isSplineShape = function() 
          
        {
          //print("JS: RXLine.isSplineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.isSplineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.isSplineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.isTriangleShape = function() 
          
        {
          //print("JS: RXLine.isTriangleShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.isTriangleShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.isTriangleShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.isXLineShape = function() 
          
        {
          //print("JS: RXLine.isXLineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.isXLineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.isXLineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.isRayShape = function() 
          
        {
          //print("JS: RXLine.isRayShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.isRayShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.isRayShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.getPolylines = function() 
          
        {
          //print("JS: RXLine.getPolylines");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getPolylines(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.getPolylines(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.getOrderedShapes = function() 
          
        {
          //print("JS: RXLine.getOrderedShapes");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getOrderedShapes(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.getOrderedShapes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.getIntersectionPointsLL = function() 
          
        {
          //print("JS: RXLine.getIntersectionPointsLL");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getIntersectionPointsLL(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getIntersectionPointsLL(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.getIntersectionPointsLL(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.getIntersectionPointsLA = function() 
          
        {
          //print("JS: RXLine.getIntersectionPointsLA");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getIntersectionPointsLA(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getIntersectionPointsLA(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.getIntersectionPointsLA(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.getIntersectionPointsLC = function() 
          
        {
          //print("JS: RXLine.getIntersectionPointsLC");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getIntersectionPointsLC(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.getIntersectionPointsLC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.getIntersectionPointsLE = function() 
          
        {
          //print("JS: RXLine.getIntersectionPointsLE");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getIntersectionPointsLE(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getIntersectionPointsLE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.getIntersectionPointsLE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.getIntersectionPointsLT = function() 
          
        {
          //print("JS: RXLine.getIntersectionPointsLT");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getIntersectionPointsLT(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getIntersectionPointsLT(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.getIntersectionPointsLT(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.getIntersectionPointsLS = function() 
          
        {
          //print("JS: RXLine.getIntersectionPointsLS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getIntersectionPointsLS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.getIntersectionPointsLS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.getIntersectionPointsLX = function() 
          
        {
          //print("JS: RXLine.getIntersectionPointsLX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getIntersectionPointsLX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.getIntersectionPointsLX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.getIntersectionPointsAA = function() 
          
        {
          //print("JS: RXLine.getIntersectionPointsAA");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getIntersectionPointsAA(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.getIntersectionPointsAA(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.getIntersectionPointsAC = function() 
          
        {
          //print("JS: RXLine.getIntersectionPointsAC");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getIntersectionPointsAC(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.getIntersectionPointsAC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.getIntersectionPointsAE = function() 
          
        {
          //print("JS: RXLine.getIntersectionPointsAE");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getIntersectionPointsAE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.getIntersectionPointsAE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.getIntersectionPointsAT = function() 
          
        {
          //print("JS: RXLine.getIntersectionPointsAT");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getIntersectionPointsAT(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.getIntersectionPointsAT(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.getIntersectionPointsAS = function() 
          
        {
          //print("JS: RXLine.getIntersectionPointsAS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getIntersectionPointsAS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.getIntersectionPointsAS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.getIntersectionPointsAX = function() 
          
        {
          //print("JS: RXLine.getIntersectionPointsAX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getIntersectionPointsAX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.getIntersectionPointsAX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.getIntersectionPointsCC = function() 
          
        {
          //print("JS: RXLine.getIntersectionPointsCC");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getIntersectionPointsCC(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.getIntersectionPointsCC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.getIntersectionPointsCE = function() 
          
        {
          //print("JS: RXLine.getIntersectionPointsCE");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getIntersectionPointsCE(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.getIntersectionPointsCE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.getIntersectionPointsCS = function() 
          
        {
          //print("JS: RXLine.getIntersectionPointsCS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getIntersectionPointsCS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.getIntersectionPointsCS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.getIntersectionPointsCX = function() 
          
        {
          //print("JS: RXLine.getIntersectionPointsCX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getIntersectionPointsCX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.getIntersectionPointsCX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.getIntersectionPointsEE = function() 
          
        {
          //print("JS: RXLine.getIntersectionPointsEE");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getIntersectionPointsEE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else 
  
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getIntersectionPointsEE(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.getIntersectionPointsEE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.getIntersectionPointsES = function() 
          
        {
          //print("JS: RXLine.getIntersectionPointsES");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getIntersectionPointsES(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.getIntersectionPointsES(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.getIntersectionPointsEX = function() 
          
        {
          //print("JS: RXLine.getIntersectionPointsEX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getIntersectionPointsEX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.getIntersectionPointsEX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.getIntersectionPointsSX = function() 
          
        {
          //print("JS: RXLine.getIntersectionPointsSX");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getIntersectionPointsSX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.getIntersectionPointsSX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.getIntersectionPointsSS = function() 
          
        {
          //print("JS: RXLine.getIntersectionPointsSS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getIntersectionPointsSS(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.getIntersectionPointsSS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.getIntersectionPointsXX = function() 
          
        {
          //print("JS: RXLine.getIntersectionPointsXX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getIntersectionPointsXX(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.getIntersectionPointsXX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.getOffsetLines = function() 
          
        {
          //print("JS: RXLine.getOffsetLines");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getOffsetLines(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.getOffsetLines(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.getOffsetArcs = function() 
          
        {
          //print("JS: RXLine.getOffsetArcs");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getOffsetArcs(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.getOffsetArcs(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.getReversedShapeList = function() 
          
        {
          //print("JS: RXLine.getReversedShapeList");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getReversedShapeList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.getReversedShapeList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.trim = function() 
          
        {
          //print("JS: RXLine.trim");
          
      if (arguments.length == 6) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.trim(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.trim(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.roundCorners = function() 
          
        {
          //print("JS: RXLine.roundCorners");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.roundCorners(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.roundCorners(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.roundShapes = function() 
          
        {
          //print("JS: RXLine.roundShapes");
          
      if (arguments.length == 8) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.roundShapes(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.roundShapes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.xLineToRay = function() 
          
        {
          //print("JS: RXLine.xLineToRay");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.xLineToRay(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.xLineToRay(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.rayToLine = function() 
          
        {
          //print("JS: RXLine.rayToLine");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.rayToLine(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.rayToLine(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.scaleArc = function() 
          
        {
          //print("JS: RXLine.scaleArc");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.scaleArc(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.scaleArc(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.ellipseToArcCircleEllipse = function() 
          
        {
          //print("JS: RXLine.ellipseToArcCircleEllipse");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.ellipseToArcCircleEllipse(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.ellipseToArcCircleEllipse(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLine.getErrorCode = function() 
          
        {
          //print("JS: RXLine.getErrorCode");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RXLine_WrapperSingletonInstance.getErrorCode(
                  
                );
              

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine.getErrorCode(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RXLine.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RXLine.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    