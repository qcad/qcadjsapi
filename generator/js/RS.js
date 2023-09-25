
      // auto generated
      //var self;

      // class constructor:
      function RS() {
        

        // should be RS_BaseJs.call(this, engine):
        //RS.prototype = new RS_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RS.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RS);
            //}
          }
          else {
            qWarning("RS.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RS_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RS);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RS);
  }

  
  else {
    
        print("RS(): wrong number / type of arguments");
      
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

      //RS.prototype = new RS_BaseJs(engine);
      //RS.prototype = new RS_Wrapper(engine);
      RS.prototype = new Object();

      RS.prototype.toString = function() {
          //return "RS [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RS [JS]";
        };
      RS.getObjectType = function() {
        return RJSType_RS.getIdStatic();
      };

      RS.prototype.getObjectType = function() {
        return RJSType_RS.getIdStatic();
      };

      RS.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RS.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: MetaType
RS.Bool = RS_Wrapper.Bool;
RS.Char = RS_Wrapper.Char;
RS.Char16 = RS_Wrapper.Char16;
RS.Char32 = RS_Wrapper.Char32;
RS.Double = RS_Wrapper.Double;
RS.Float = RS_Wrapper.Float;
RS.Int = RS_Wrapper.Int;
RS.Long = RS_Wrapper.Long;
RS.LongLong = RS_Wrapper.LongLong;
RS.Nullptr = RS_Wrapper.Nullptr;
RS.BitArray = RS_Wrapper.BitArray;
RS.Bitmap = RS_Wrapper.Bitmap;
RS.Brush = RS_Wrapper.Brush;
RS.ByteArray = RS_Wrapper.ByteArray;
RS.ByteArrayList = RS_Wrapper.ByteArrayList;
RS.CborArray = RS_Wrapper.CborArray;
RS.CborMap = RS_Wrapper.CborMap;
RS.CborSimpleType = RS_Wrapper.CborSimpleType;
RS.CborValue = RS_Wrapper.CborValue;
RS.Color = RS_Wrapper.Color;
RS.ColorSpace = RS_Wrapper.ColorSpace;
RS.Cursor = RS_Wrapper.Cursor;
RS.Date = RS_Wrapper.Date;
RS.DateTime = RS_Wrapper.DateTime;
RS.EasingCurve = RS_Wrapper.EasingCurve;
RS.Font = RS_Wrapper.Font;
RS.Icon = RS_Wrapper.Icon;
RS.Image = RS_Wrapper.Image;
RS.JsonArray = RS_Wrapper.JsonArray;
RS.JsonDocument = RS_Wrapper.JsonDocument;
RS.JsonObject = RS_Wrapper.JsonObject;
RS.JsonValue = RS_Wrapper.JsonValue;
RS.KeySequence = RS_Wrapper.KeySequence;
RS.Line = RS_Wrapper.Line;
RS.LineF = RS_Wrapper.LineF;
RS.Locale = RS_Wrapper.Locale;
RS.Matrix4x4 = RS_Wrapper.Matrix4x4;
RS.ModelIndex = RS_Wrapper.ModelIndex;
RS.ObjectStar = RS_Wrapper.ObjectStar;
RS.Palette = RS_Wrapper.Palette;
RS.Pen = RS_Wrapper.Pen;
RS.PersistentModelIndex = RS_Wrapper.PersistentModelIndex;
RS.Pixmap = RS_Wrapper.Pixmap;
RS.Point = RS_Wrapper.Point;
RS.PointF = RS_Wrapper.PointF;
RS.Polygon = RS_Wrapper.Polygon;
RS.PolygonF = RS_Wrapper.PolygonF;
RS.Quaternion = RS_Wrapper.Quaternion;
RS.Rect = RS_Wrapper.Rect;
RS.RectF = RS_Wrapper.RectF;
RS.Region = RS_Wrapper.Region;
RS.RegularExpression = RS_Wrapper.RegularExpression;
RS.Size = RS_Wrapper.Size;
RS.SizeF = RS_Wrapper.SizeF;
RS.SizePolicy = RS_Wrapper.SizePolicy;
RS.String = RS_Wrapper.String;
RS.StringList = RS_Wrapper.StringList;
RS.TextFormat = RS_Wrapper.TextFormat;
RS.TextLength = RS_Wrapper.TextLength;
RS.Time = RS_Wrapper.Time;
RS.Transform = RS_Wrapper.Transform;
RS.Url = RS_Wrapper.Url;
RS.Uuid = RS_Wrapper.Uuid;
RS.Variant = RS_Wrapper.Variant;
RS.VariantHash = RS_Wrapper.VariantHash;
RS.VariantList = RS_Wrapper.VariantList;
RS.VariantMap = RS_Wrapper.VariantMap;
RS.Vector2D = RS_Wrapper.Vector2D;
RS.Vector3D = RS_Wrapper.Vector3D;
RS.Vector4D = RS_Wrapper.Vector4D;
RS.SChar = RS_Wrapper.SChar;
RS.Short = RS_Wrapper.Short;
RS.UChar = RS_Wrapper.UChar;
RS.UInt = RS_Wrapper.UInt;
RS.ULong = RS_Wrapper.ULong;
RS.ULongLong = RS_Wrapper.ULongLong;
RS.UShort = RS_Wrapper.UShort;
RS.UnknownType = RS_Wrapper.UnknownType;
RS.UserType = RS_Wrapper.UserType;
RS.VoidStar = RS_Wrapper.VoidStar;

  // enum: MessageType
RS.Print = RS_Wrapper.Print;
RS.Debug = RS_Wrapper.Debug;
RS.Warning = RS_Wrapper.Warning;
RS.Critical = RS_Wrapper.Critical;
RS.Command = RS_Wrapper.Command;

  // enum: EntityType
RS.ObjectAll = RS_Wrapper.ObjectAll;
RS.ObjectUnknown = RS_Wrapper.ObjectUnknown;
RS.ObjectLinetype = RS_Wrapper.ObjectLinetype;
RS.ObjectLayer = RS_Wrapper.ObjectLayer;
RS.ObjectBlock = RS_Wrapper.ObjectBlock;
RS.ObjectLayout = RS_Wrapper.ObjectLayout;
RS.ObjectLayerState = RS_Wrapper.ObjectLayerState;
RS.ObjectView = RS_Wrapper.ObjectView;
RS.ObjectUcs = RS_Wrapper.ObjectUcs;
RS.ObjectDocumentVariable = RS_Wrapper.ObjectDocumentVariable;
RS.ObjectDimStyle = RS_Wrapper.ObjectDimStyle;
RS.EntityAll = RS_Wrapper.EntityAll;
RS.EntityUnknown = RS_Wrapper.EntityUnknown;
RS.EntityAttribute = RS_Wrapper.EntityAttribute;
RS.EntityAttributeDefinition = RS_Wrapper.EntityAttributeDefinition;
RS.EntityBlockRef = RS_Wrapper.EntityBlockRef;
RS.EntityBlockRefAttr = RS_Wrapper.EntityBlockRefAttr;
RS.EntityPoint = RS_Wrapper.EntityPoint;
RS.EntityLine = RS_Wrapper.EntityLine;
RS.EntityXLine = RS_Wrapper.EntityXLine;
RS.EntityRay = RS_Wrapper.EntityRay;
RS.EntityPolyline = RS_Wrapper.EntityPolyline;
RS.EntityArc = RS_Wrapper.EntityArc;
RS.EntityCircle = RS_Wrapper.EntityCircle;
RS.EntityEllipse = RS_Wrapper.EntityEllipse;
RS.EntitySolid = RS_Wrapper.EntitySolid;
RS.Entity3dFace = RS_Wrapper.Entity3dFace;
RS.EntityTextBased = RS_Wrapper.EntityTextBased;
RS.EntityText = RS_Wrapper.EntityText;
RS.EntityTrace = RS_Wrapper.EntityTrace;
RS.EntityFace = RS_Wrapper.EntityFace;
RS.EntityDimension = RS_Wrapper.EntityDimension;
RS.EntityDimLinear = RS_Wrapper.EntityDimLinear;
RS.EntityDimAligned = RS_Wrapper.EntityDimAligned;
RS.EntityDimRotated = RS_Wrapper.EntityDimRotated;
RS.EntityDimRadial = RS_Wrapper.EntityDimRadial;
RS.EntityDimDiametric = RS_Wrapper.EntityDimDiametric;
RS.EntityDimAngular = RS_Wrapper.EntityDimAngular;
RS.EntityDimAngular2L = RS_Wrapper.EntityDimAngular2L;
RS.EntityDimAngular3P = RS_Wrapper.EntityDimAngular3P;
RS.EntityDimArcLength = RS_Wrapper.EntityDimArcLength;
RS.EntityDimOrdinate = RS_Wrapper.EntityDimOrdinate;
RS.EntityHatch = RS_Wrapper.EntityHatch;
RS.EntityImage = RS_Wrapper.EntityImage;
RS.EntityLeader = RS_Wrapper.EntityLeader;
RS.EntitySpline = RS_Wrapper.EntitySpline;
RS.EntityViewport = RS_Wrapper.EntityViewport;
RS.EntityTolerance = RS_Wrapper.EntityTolerance;
RS.EntityUser = RS_Wrapper.EntityUser;

  // enum: ProjectionRenderingHint
RS.RenderTop = RS_Wrapper.RenderTop;
RS.RenderSide = RS_Wrapper.RenderSide;
RS.RenderFront = RS_Wrapper.RenderFront;
RS.RenderThreeD = RS_Wrapper.RenderThreeD;

  // enum: OrthoMode
RS.OrthoVertical = RS_Wrapper.OrthoVertical;
RS.OrthoHorizonal = RS_Wrapper.OrthoHorizonal;
RS.Orthogonal = RS_Wrapper.Orthogonal;

  // enum: Side
RS.NoSide = RS_Wrapper.NoSide;
RS.LeftHand = RS_Wrapper.LeftHand;
RS.RightHand = RS_Wrapper.RightHand;
RS.BothSides = RS_Wrapper.BothSides;

  // enum: Ending
RS.EndingStart = RS_Wrapper.EndingStart;
RS.EndingEnd = RS_Wrapper.EndingEnd;
RS.EndingNone = RS_Wrapper.EndingNone;

  // enum: VAlign
RS.VAlignTop = RS_Wrapper.VAlignTop;
RS.VAlignMiddle = RS_Wrapper.VAlignMiddle;
RS.VAlignBase = RS_Wrapper.VAlignBase;
RS.VAlignBottom = RS_Wrapper.VAlignBottom;

  // enum: HAlign
RS.HAlignLeft = RS_Wrapper.HAlignLeft;
RS.HAlignCenter = RS_Wrapper.HAlignCenter;
RS.HAlignRight = RS_Wrapper.HAlignRight;
RS.HAlignAlign = RS_Wrapper.HAlignAlign;
RS.HAlignMid = RS_Wrapper.HAlignMid;
RS.HAlignFit = RS_Wrapper.HAlignFit;

  // enum: TextDrawingDirection
RS.LeftToRight = RS_Wrapper.LeftToRight;
RS.TopToBottom = RS_Wrapper.TopToBottom;
RS.ByStyle = RS_Wrapper.ByStyle;

  // enum: TextLineSpacingStyle
RS.AtLeast = RS_Wrapper.AtLeast;
RS.Exact = RS_Wrapper.Exact;

  // enum: From
RS.FromStart = RS_Wrapper.FromStart;
RS.FromEnd = RS_Wrapper.FromEnd;
RS.FromAny = RS_Wrapper.FromAny;
RS.AlongPolyline = RS_Wrapper.AlongPolyline;

  // enum: IsoProjectionType
RS.NoProjection = RS_Wrapper.NoProjection;
RS.Top = RS_Wrapper.Top;
RS.Bottom = RS_Wrapper.Bottom;
RS.Left = RS_Wrapper.Left;
RS.LeftBack = RS_Wrapper.LeftBack;
RS.Right = RS_Wrapper.Right;
RS.RightBack = RS_Wrapper.RightBack;
RS.Isometric = RS_Wrapper.Isometric;
RS.IsometricTrue = RS_Wrapper.IsometricTrue;
RS.Planometric = RS_Wrapper.Planometric;
RS.Dimetric = RS_Wrapper.Dimetric;
RS.Cabinet = RS_Wrapper.Cabinet;
RS.Cabinet30 = RS_Wrapper.Cabinet30;
RS.Cavalier = RS_Wrapper.Cavalier;
RS.User1 = RS_Wrapper.User1;
RS.User2 = RS_Wrapper.User2;
RS.User3 = RS_Wrapper.User3;
RS.User4 = RS_Wrapper.User4;
RS.IsoTop = RS_Wrapper.IsoTop;
RS.IsoBottom = RS_Wrapper.IsoBottom;
RS.IsoLeft = RS_Wrapper.IsoLeft;
RS.IsoLeftBack = RS_Wrapper.IsoLeftBack;
RS.IsoRight = RS_Wrapper.IsoRight;
RS.IsoRightBack = RS_Wrapper.IsoRightBack;

  // enum: Measurement
RS.UnknownMeasurement = RS_Wrapper.UnknownMeasurement;
RS.Imperial = RS_Wrapper.Imperial;
RS.Metric = RS_Wrapper.Metric;

  // enum: Unit
RS.None = RS_Wrapper.None;
RS.Inch = RS_Wrapper.Inch;
RS.Foot = RS_Wrapper.Foot;
RS.Mile = RS_Wrapper.Mile;
RS.Millimeter = RS_Wrapper.Millimeter;
RS.Centimeter = RS_Wrapper.Centimeter;
RS.Meter = RS_Wrapper.Meter;
RS.Kilometer = RS_Wrapper.Kilometer;
RS.Microinch = RS_Wrapper.Microinch;
RS.Mil = RS_Wrapper.Mil;
RS.Yard = RS_Wrapper.Yard;
RS.Angstrom = RS_Wrapper.Angstrom;
RS.Nanometer = RS_Wrapper.Nanometer;
RS.Micron = RS_Wrapper.Micron;
RS.Decimeter = RS_Wrapper.Decimeter;
RS.Decameter = RS_Wrapper.Decameter;
RS.Hectometer = RS_Wrapper.Hectometer;
RS.Gigameter = RS_Wrapper.Gigameter;
RS.Astro = RS_Wrapper.Astro;
RS.Lightyear = RS_Wrapper.Lightyear;
RS.Parsec = RS_Wrapper.Parsec;
RS.MaxUnit = RS_Wrapper.MaxUnit;

  // enum: AngleFormat
RS.DegreesDecimal = RS_Wrapper.DegreesDecimal;
RS.DegreesMinutesSeconds = RS_Wrapper.DegreesMinutesSeconds;
RS.Gradians = RS_Wrapper.Gradians;
RS.Radians = RS_Wrapper.Radians;
RS.Surveyors = RS_Wrapper.Surveyors;

  // enum: LinearFormat
RS.Scientific = RS_Wrapper.Scientific;
RS.Decimal = RS_Wrapper.Decimal;
RS.Engineering = RS_Wrapper.Engineering;
RS.ArchitecturalStacked = RS_Wrapper.ArchitecturalStacked;
RS.FractionalStacked = RS_Wrapper.FractionalStacked;
RS.Architectural = RS_Wrapper.Architectural;
RS.Fractional = RS_Wrapper.Fractional;
RS.WindowsDesktop = RS_Wrapper.WindowsDesktop;

  // enum: AngleUnit
RS.Deg = RS_Wrapper.Deg;
RS.Rad = RS_Wrapper.Rad;
RS.Gra = RS_Wrapper.Gra;

  // enum: KnownVariable
RS.ANGBASE = RS_Wrapper.ANGBASE;
RS.ANGDIR = RS_Wrapper.ANGDIR;
RS.ATTMODE = RS_Wrapper.ATTMODE;
RS.AUNITS = RS_Wrapper.AUNITS;
RS.AUPREC = RS_Wrapper.AUPREC;
RS.CECOLOR = RS_Wrapper.CECOLOR;
RS.CELTSCALE = RS_Wrapper.CELTSCALE;
RS.CHAMFERA = RS_Wrapper.CHAMFERA;
RS.CHAMFERB = RS_Wrapper.CHAMFERB;
RS.CHAMFERC = RS_Wrapper.CHAMFERC;
RS.CHAMFERD = RS_Wrapper.CHAMFERD;
RS.CLAYER = RS_Wrapper.CLAYER;
RS.CMLJUST = RS_Wrapper.CMLJUST;
RS.CMLSCALE = RS_Wrapper.CMLSCALE;
RS.DIMADEC = RS_Wrapper.DIMADEC;
RS.DIMALT = RS_Wrapper.DIMALT;
RS.DIMALTD = RS_Wrapper.DIMALTD;
RS.DIMALTF = RS_Wrapper.DIMALTF;
RS.DIMALTRND = RS_Wrapper.DIMALTRND;
RS.DIMALTTD = RS_Wrapper.DIMALTTD;
RS.DIMALTTZ = RS_Wrapper.DIMALTTZ;
RS.DIMALTU = RS_Wrapper.DIMALTU;
RS.DIMALTZ = RS_Wrapper.DIMALTZ;
RS.DIMAPOST = RS_Wrapper.DIMAPOST;
RS.DIMASZ = RS_Wrapper.DIMASZ;
RS.DIMATFIT = RS_Wrapper.DIMATFIT;
RS.DIMAUNIT = RS_Wrapper.DIMAUNIT;
RS.DIMAZIN = RS_Wrapper.DIMAZIN;
RS.DIMBLK = RS_Wrapper.DIMBLK;
RS.DIMBLK1 = RS_Wrapper.DIMBLK1;
RS.DIMBLK2 = RS_Wrapper.DIMBLK2;
RS.DIMCEN = RS_Wrapper.DIMCEN;
RS.DIMCLRD = RS_Wrapper.DIMCLRD;
RS.DIMCLRE = RS_Wrapper.DIMCLRE;
RS.DIMCLRT = RS_Wrapper.DIMCLRT;
RS.DIMDEC = RS_Wrapper.DIMDEC;
RS.DIMDLE = RS_Wrapper.DIMDLE;
RS.DIMDLI = RS_Wrapper.DIMDLI;
RS.DIMDSEP = RS_Wrapper.DIMDSEP;
RS.DIMEXE = RS_Wrapper.DIMEXE;
RS.DIMEXO = RS_Wrapper.DIMEXO;
RS.DIMFRAC = RS_Wrapper.DIMFRAC;
RS.DIMGAP = RS_Wrapper.DIMGAP;
RS.DIMJUST = RS_Wrapper.DIMJUST;
RS.DIMLDRBLK = RS_Wrapper.DIMLDRBLK;
RS.DIMLFAC = RS_Wrapper.DIMLFAC;
RS.DIMLIM = RS_Wrapper.DIMLIM;
RS.DIMLUNIT = RS_Wrapper.DIMLUNIT;
RS.DIMLWD = RS_Wrapper.DIMLWD;
RS.DIMLWE = RS_Wrapper.DIMLWE;
RS.DIMPOST = RS_Wrapper.DIMPOST;
RS.DIMRND = RS_Wrapper.DIMRND;
RS.DIMSAH = RS_Wrapper.DIMSAH;
RS.DIMSCALE = RS_Wrapper.DIMSCALE;
RS.DIMSD1 = RS_Wrapper.DIMSD1;
RS.DIMSD2 = RS_Wrapper.DIMSD2;
RS.DIMSE1 = RS_Wrapper.DIMSE1;
RS.DIMSE2 = RS_Wrapper.DIMSE2;
RS.DIMSOXD = RS_Wrapper.DIMSOXD;
RS.DIMTAD = RS_Wrapper.DIMTAD;
RS.DIMTDEC = RS_Wrapper.DIMTDEC;
RS.DIMTFAC = RS_Wrapper.DIMTFAC;
RS.DIMTIH = RS_Wrapper.DIMTIH;
RS.DIMTIX = RS_Wrapper.DIMTIX;
RS.DIMTM = RS_Wrapper.DIMTM;
RS.DIMTOFL = RS_Wrapper.DIMTOFL;
RS.DIMTOH = RS_Wrapper.DIMTOH;
RS.DIMTOL = RS_Wrapper.DIMTOL;
RS.DIMTOLJ = RS_Wrapper.DIMTOLJ;
RS.DIMTP = RS_Wrapper.DIMTP;
RS.DIMTSZ = RS_Wrapper.DIMTSZ;
RS.DIMTVP = RS_Wrapper.DIMTVP;
RS.DIMTXSTY = RS_Wrapper.DIMTXSTY;
RS.DIMTXT = RS_Wrapper.DIMTXT;
RS.DIMTZIN = RS_Wrapper.DIMTZIN;
RS.DIMUPT = RS_Wrapper.DIMUPT;
RS.DIMZIN = RS_Wrapper.DIMZIN;
RS.DISPSILH = RS_Wrapper.DISPSILH;
RS.DWGCODEPAGE = RS_Wrapper.DWGCODEPAGE;
RS.DRAWORDERCTL = RS_Wrapper.DRAWORDERCTL;
RS.ELEVATION = RS_Wrapper.ELEVATION;
RS.EXTMAX = RS_Wrapper.EXTMAX;
RS.EXTMIN = RS_Wrapper.EXTMIN;
RS.FACETRES = RS_Wrapper.FACETRES;
RS.FILLETRAD = RS_Wrapper.FILLETRAD;
RS.FILLMODE = RS_Wrapper.FILLMODE;
RS.INSBASE = RS_Wrapper.INSBASE;
RS.INSUNITS = RS_Wrapper.INSUNITS;
RS.ISOLINES = RS_Wrapper.ISOLINES;
RS.LIMCHECK = RS_Wrapper.LIMCHECK;
RS.LIMMAX = RS_Wrapper.LIMMAX;
RS.LIMMIN = RS_Wrapper.LIMMIN;
RS.LTSCALE = RS_Wrapper.LTSCALE;
RS.LUNITS = RS_Wrapper.LUNITS;
RS.LUPREC = RS_Wrapper.LUPREC;
RS.MAXACTVP = RS_Wrapper.MAXACTVP;
RS.MEASUREMENT = RS_Wrapper.MEASUREMENT;
RS.MIRRTEXT = RS_Wrapper.MIRRTEXT;
RS.ORTHOMODE = RS_Wrapper.ORTHOMODE;
RS.PDMODE = RS_Wrapper.PDMODE;
RS.PDSIZE = RS_Wrapper.PDSIZE;
RS.PELEVATION = RS_Wrapper.PELEVATION;
RS.PELLIPSE = RS_Wrapper.PELLIPSE;
RS.PEXTMAX = RS_Wrapper.PEXTMAX;
RS.PEXTMIN = RS_Wrapper.PEXTMIN;
RS.PINSBASE = RS_Wrapper.PINSBASE;
RS.PLIMCHECK = RS_Wrapper.PLIMCHECK;
RS.PLIMMAX = RS_Wrapper.PLIMMAX;
RS.PLIMMIN = RS_Wrapper.PLIMMIN;
RS.PLINEGEN = RS_Wrapper.PLINEGEN;
RS.PLINEWID = RS_Wrapper.PLINEWID;
RS.PROXYGRAPHICS = RS_Wrapper.PROXYGRAPHICS;
RS.PSLTSCALE = RS_Wrapper.PSLTSCALE;
RS.PUCSNAME = RS_Wrapper.PUCSNAME;
RS.PUCSORG = RS_Wrapper.PUCSORG;
RS.PUCSXDIR = RS_Wrapper.PUCSXDIR;
RS.PUCSYDIR = RS_Wrapper.PUCSYDIR;
RS.QTEXTMODE = RS_Wrapper.QTEXTMODE;
RS.REGENMODE = RS_Wrapper.REGENMODE;
RS.SHADEDGE = RS_Wrapper.SHADEDGE;
RS.SHADEDIF = RS_Wrapper.SHADEDIF;
RS.SKETCHINC = RS_Wrapper.SKETCHINC;
RS.SKPOLY = RS_Wrapper.SKPOLY;
RS.SPLFRAME = RS_Wrapper.SPLFRAME;
RS.SPLINESEGS = RS_Wrapper.SPLINESEGS;
RS.SPLINETYPE = RS_Wrapper.SPLINETYPE;
RS.SURFTAB1 = RS_Wrapper.SURFTAB1;
RS.SURFTAB2 = RS_Wrapper.SURFTAB2;
RS.SURFTYPE = RS_Wrapper.SURFTYPE;
RS.SURFU = RS_Wrapper.SURFU;
RS.SURFV = RS_Wrapper.SURFV;
RS.TEXTQLTY = RS_Wrapper.TEXTQLTY;
RS.TEXTSIZE = RS_Wrapper.TEXTSIZE;
RS.TEXTSTYLE = RS_Wrapper.TEXTSTYLE;
RS.THICKNESS = RS_Wrapper.THICKNESS;
RS.TILEMODE = RS_Wrapper.TILEMODE;
RS.TRACEWID = RS_Wrapper.TRACEWID;
RS.TREEDEPTH = RS_Wrapper.TREEDEPTH;
RS.UCSNAME = RS_Wrapper.UCSNAME;
RS.UCSORG = RS_Wrapper.UCSORG;
RS.UCSXDIR = RS_Wrapper.UCSXDIR;
RS.UCSYDIR = RS_Wrapper.UCSYDIR;
RS.UNITMODE = RS_Wrapper.UNITMODE;
RS.USERI1 = RS_Wrapper.USERI1;
RS.USERI2 = RS_Wrapper.USERI2;
RS.USERI3 = RS_Wrapper.USERI3;
RS.USERI4 = RS_Wrapper.USERI4;
RS.USERI5 = RS_Wrapper.USERI5;
RS.USERR1 = RS_Wrapper.USERR1;
RS.USERR2 = RS_Wrapper.USERR2;
RS.USERR3 = RS_Wrapper.USERR3;
RS.USERR4 = RS_Wrapper.USERR4;
RS.USERR5 = RS_Wrapper.USERR5;
RS.USRTIMER = RS_Wrapper.USRTIMER;
RS.VISRETAIN = RS_Wrapper.VISRETAIN;
RS.WORLDVIEW = RS_Wrapper.WORLDVIEW;
RS.MaxKnownVariable = RS_Wrapper.MaxKnownVariable;
RS.INVALID = RS_Wrapper.INVALID;

  // enum: KnownVariableType
RS.VarTypeBool = RS_Wrapper.VarTypeBool;
RS.VarTypeInt = RS_Wrapper.VarTypeInt;
RS.VarTypeDouble = RS_Wrapper.VarTypeDouble;
RS.VarTypeColor = RS_Wrapper.VarTypeColor;
RS.VarTypeUnknown = RS_Wrapper.VarTypeUnknown;

  // enum: BooleanOperation
RS.Intersection = RS_Wrapper.Intersection;
RS.Union = RS_Wrapper.Union;
RS.Difference = RS_Wrapper.Difference;
RS.Xor = RS_Wrapper.Xor;

  // enum: FillType
RS.EvenOdd = RS_Wrapper.EvenOdd;
RS.NonZero = RS_Wrapper.NonZero;
RS.Positive = RS_Wrapper.Positive;
RS.Negative = RS_Wrapper.Negative;

  // enum: Orientation
RS.UnknownOrientation = RS_Wrapper.UnknownOrientation;
RS.Any = RS_Wrapper.Any;
RS.CW = RS_Wrapper.CW;
RS.CCW = RS_Wrapper.CCW;

  // enum: JoinType
RS.JoinBevel = RS_Wrapper.JoinBevel;
RS.JoinRound = RS_Wrapper.JoinRound;
RS.JoinMiter = RS_Wrapper.JoinMiter;

  // enum: EndType
RS.EndClosedPolygon = RS_Wrapper.EndClosedPolygon;
RS.EndClosedLine = RS_Wrapper.EndClosedLine;
RS.EndOpenButt = RS_Wrapper.EndOpenButt;
RS.EndOpenSquare = RS_Wrapper.EndOpenSquare;
RS.EndOpenRound = RS_Wrapper.EndOpenRound;
RS.EndOpenSingle = RS_Wrapper.EndOpenSingle;

  // enum: Easing
RS.Linear = RS_Wrapper.Linear;
RS.InQuad = RS_Wrapper.InQuad;
RS.OutQuad = RS_Wrapper.OutQuad;
RS.InOutQuad = RS_Wrapper.InOutQuad;
RS.OutInQuad = RS_Wrapper.OutInQuad;
RS.InCubic = RS_Wrapper.InCubic;
RS.OutCubic = RS_Wrapper.OutCubic;
RS.InOutCubic = RS_Wrapper.InOutCubic;
RS.OutInCubic = RS_Wrapper.OutInCubic;
RS.InQuart = RS_Wrapper.InQuart;
RS.OutQuart = RS_Wrapper.OutQuart;
RS.InOutQuart = RS_Wrapper.InOutQuart;
RS.OutInQuart = RS_Wrapper.OutInQuart;
RS.InQuint = RS_Wrapper.InQuint;
RS.OutQuint = RS_Wrapper.OutQuint;
RS.InOutQuint = RS_Wrapper.InOutQuint;
RS.OutInQuint = RS_Wrapper.OutInQuint;
RS.InSine = RS_Wrapper.InSine;
RS.OutSine = RS_Wrapper.OutSine;
RS.InOutSine = RS_Wrapper.InOutSine;
RS.OutInSine = RS_Wrapper.OutInSine;
RS.InExpo = RS_Wrapper.InExpo;
RS.OutExpo = RS_Wrapper.OutExpo;
RS.InOutExpo = RS_Wrapper.InOutExpo;
RS.OutInExpo = RS_Wrapper.OutInExpo;
RS.InCirc = RS_Wrapper.InCirc;
RS.OutCirc = RS_Wrapper.OutCirc;
RS.InOutCirc = RS_Wrapper.InOutCirc;
RS.OutInCirc = RS_Wrapper.OutInCirc;
RS.InElastic = RS_Wrapper.InElastic;
RS.OutElastic = RS_Wrapper.OutElastic;
RS.InOutElastic = RS_Wrapper.InOutElastic;
RS.OutInElastic = RS_Wrapper.OutInElastic;
RS.InBack = RS_Wrapper.InBack;
RS.OutBack = RS_Wrapper.OutBack;
RS.InOutBack = RS_Wrapper.InOutBack;
RS.OutInBack = RS_Wrapper.OutInBack;
RS.InBounce = RS_Wrapper.InBounce;
RS.OutBounce = RS_Wrapper.OutBounce;
RS.InOutBounce = RS_Wrapper.InOutBounce;
RS.OutInBounce = RS_Wrapper.OutInBounce;


      // functions:
      

      // static functions:
      

        // static function 
        RS.compare = function() 
          
        {
          //print("JS: RS.compare");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RS_WrapperSingletonInstance.compare(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RS);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RS_WrapperSingletonInstance.compare(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RS);
  }

  
  else {
    
        print("RS.compare(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RS.getCpuCores = function() 
          
        {
          //print("JS: RS.getCpuCores");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RS_WrapperSingletonInstance.getCpuCores(
                  
                );
              

        //copyProperties(this, wrapper, RS);
  }

  
  else {
    
        print("RS.getCpuCores(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RS.getIdealThreadCount = function() 
          
        {
          //print("JS: RS.getIdealThreadCount");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RS_WrapperSingletonInstance.getIdealThreadCount(
                  
                );
              

        //copyProperties(this, wrapper, RS);
  }

  
  else {
    
        print("RS.getIdealThreadCount(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RS.getBuildCpuArchitecture = function() 
          
        {
          //print("JS: RS.getBuildCpuArchitecture");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RS_WrapperSingletonInstance.getBuildCpuArchitecture(
                  
                );
              

        //copyProperties(this, wrapper, RS);
  }

  
  else {
    
        print("RS.getBuildCpuArchitecture(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RS.getHostId = function() 
          
        {
          //print("JS: RS.getHostId");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RS_WrapperSingletonInstance.getHostId(
                  
                );
              

        //copyProperties(this, wrapper, RS);
  }

  
  else {
    
        print("RS.getHostId(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RS.getSystemId = function() 
          
        {
          //print("JS: RS.getSystemId");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RS_WrapperSingletonInstance.getSystemId(
                  
                );
              

        //copyProperties(this, wrapper, RS);
  }

  
  else {
    
        print("RS.getSystemId(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RS.getWindowManagerId = function() 
          
        {
          //print("JS: RS.getWindowManagerId");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RS_WrapperSingletonInstance.getWindowManagerId(
                  
                );
              

        //copyProperties(this, wrapper, RS);
  }

  
  else {
    
        print("RS.getWindowManagerId(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RS.showInFileManager = function() 
          
        {
          //print("JS: RS.showInFileManager");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RS_WrapperSingletonInstance.showInFileManager(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RS);
  }

  
  else {
    
        print("RS.showInFileManager(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RS.getDirectoryList = function() 
          
        {
          //print("JS: RS.getDirectoryList");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RS_WrapperSingletonInstance.getDirectoryList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RS);
  }

  
  else {
    
        print("RS.getDirectoryList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RS.getFileList = function() 
          
        {
          //print("JS: RS.getFileList");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RS_WrapperSingletonInstance.getFileList(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RS);
  }

  
  else {
    
        print("RS.getFileList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RS.getFontList = function() 
          
        {
          //print("JS: RS.getFontList");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RS_WrapperSingletonInstance.getFontList(
                  
                );
              

        //copyProperties(this, wrapper, RS);
  }

  
  else {
    
        print("RS.getFontList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RS.getPatternList = function() 
          
        {
          //print("JS: RS.getPatternList");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RS_WrapperSingletonInstance.getPatternList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RS);
  }

  
  else {
    
        print("RS.getPatternList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RS.getLinetypeList = function() 
          
        {
          //print("JS: RS.getLinetypeList");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RS_WrapperSingletonInstance.getLinetypeList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RS);
  }

  
  else {
    
        print("RS.getLinetypeList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RS.sortAlphanumerical = function() 
          
        {
          //print("JS: RS.sortAlphanumerical");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RS_WrapperSingletonInstance.sortAlphanumerical(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RS);
  }

  
  else {
    
        print("RS.sortAlphanumerical(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RS.compareChunkify = function() 
          
        {
          //print("JS: RS.compareChunkify");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RS_WrapperSingletonInstance.compareChunkify(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RS);
  }

  
  else {
    
        print("RS.compareChunkify(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RS.compareAlphanumerical = function() 
          
        {
          //print("JS: RS.compareAlphanumerical");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RS_WrapperSingletonInstance.compareAlphanumerical(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RS);
  }

  
  else {
    
        print("RS.compareAlphanumerical(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RS.lessThanAlphanumerical = function() 
          
        {
          //print("JS: RS.lessThanAlphanumerical");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RS_WrapperSingletonInstance.lessThanAlphanumerical(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RS);
  }

  
  else {
    
        print("RS.lessThanAlphanumerical(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RS.getFontFamily = function() 
          
        {
          //print("JS: RS.getFontFamily");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RS_WrapperSingletonInstance.getFontFamily(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RS);
  }

  
  else {
    
        print("RS.getFontFamily(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RS.getPageSizeId = function() 
          
        {
          //print("JS: RS.getPageSizeId");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RS_WrapperSingletonInstance.getPageSizeId(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RS);
  }

  
  else {
    
        print("RS.getPageSizeId(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RS.getPageSize = function() 
          
        {
          //print("JS: RS.getPageSize");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RS_WrapperSingletonInstance.getPageSize(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RS);
  }

  
  else {
    
        print("RS.getPageSize(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RS.setUtf8Codec = function() 
          
        {
          //print("JS: RS.setUtf8Codec");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RS_WrapperSingletonInstance.setUtf8Codec(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RS);
  }

  
  else {
    
        print("RS.setUtf8Codec(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RS.escape = function() 
          
        {
          //print("JS: RS.escape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RS_WrapperSingletonInstance.escape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RS);
  }

  
  else {
    
        print("RS.escape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RS.getScreenCount = function() 
          
        {
          //print("JS: RS.getScreenCount");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RS_WrapperSingletonInstance.getScreenCount(
                  
                );
              

        //copyProperties(this, wrapper, RS);
  }

  
  else {
    
        print("RS.getScreenCount(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RS.getAvailableGeometry = function() 
          
        {
          //print("JS: RS.getAvailableGeometry");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RS_WrapperSingletonInstance.getAvailableGeometry(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RS);
  }

  
  else {
    
        print("RS.getAvailableGeometry(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RS.convert = function() 
          
        {
          //print("JS: RS.convert");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RS_WrapperSingletonInstance.convert(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RS);
  }

  
  else {
    
        print("RS.convert(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RS.PointTolerance = 
  RS_WrapperSingletonInstance.PointTolerance;
RS.AngleTolerance = 
  RS_WrapperSingletonInstance.AngleTolerance;
RS.Portrait = 
  RS_WrapperSingletonInstance.Portrait;
RS.Landscape = 
  RS_WrapperSingletonInstance.Landscape;


      // copy function:
      //RS.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RS.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    