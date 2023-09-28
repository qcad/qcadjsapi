
  // Auto generated
  
    #ifndef RS_H_WRAPPER
    #define RS_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RVector.h"
      
        #include "RPropertyAttributes.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RS.h"
      
      // singleton class wrapper for static functions:
      class RS_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      
  Q_PROPERTY(
    
    QJSValue
     PointTolerance
        // auto generated read function for public static properties:
         READ  getPointTolerance
  )

  Q_PROPERTY(
    
    QJSValue
     AngleTolerance
        // auto generated read function for public static properties:
         READ  getAngleTolerance
  )

  Q_PROPERTY(
    
    QJSValue
     Portrait
        // auto generated read function for public static properties:
         READ  getPortrait
  )

  Q_PROPERTY(
    
    QJSValue
     Landscape
        // auto generated read function for public static properties:
         READ  getLandscape
  )


      public:
      //Q_INVOKABLE 
      RS_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      
  // auto generated read function for public static property PointTolerance:
  Q_INVOKABLE QJSValue getPointTolerance() {
    return RJSHelper::cpp2js_double(handler, RS::PointTolerance);
  }

  // auto generated read function for public static property AngleTolerance:
  Q_INVOKABLE QJSValue getAngleTolerance() {
    return RJSHelper::cpp2js_double(handler, RS::AngleTolerance);
  }

  // auto generated read function for public static property Portrait:
  Q_INVOKABLE QJSValue getPortrait() {
    return RJSHelper::cpp2js_QPageLayout_Orientation(handler, RS::Portrait);
  }

  // auto generated read function for public static property Landscape:
  Q_INVOKABLE QJSValue getLandscape() {
    return RJSHelper::cpp2js_QPageLayout_Orientation(handler, RS::Landscape);
  }


      // static functions:
      
    // Class: RS
    // Function: compare
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  compare
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: RS
    // Function: getCpuCores
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getCpuCores
              (

                
              )
              
              ;
            
    // Class: RS
    // Function: getIdealThreadCount
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getIdealThreadCount
              (

                
              )
              
              ;
            
    // Class: RS
    // Function: getBuildCpuArchitecture
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getBuildCpuArchitecture
              (

                
              )
              
              ;
            
    // Class: RS
    // Function: getHostId
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getHostId
              (

                
              )
              
              ;
            
    // Class: RS
    // Function: getSystemId
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getSystemId
              (

                
              )
              
              ;
            
    // Class: RS
    // Function: getWindowManagerId
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getWindowManagerId
              (

                
              )
              
              ;
            
    // Class: RS
    // Function: showInFileManager
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  showInFileManager
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RS
    // Function: getDirectoryList
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDirectoryList
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RS
    // Function: getFileList
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getFileList
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RS
    // Function: getFontList
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getFontList
              (

                
              )
              
              ;
            
    // Class: RS
    // Function: getPatternList
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPatternList
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RS
    // Function: getLinetypeList
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getLinetypeList
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RS
    // Function: sortAlphanumerical
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sortAlphanumerical
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RS
    // Function: compareChunkify
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  compareChunkify
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RS
    // Function: compareAlphanumerical
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  compareAlphanumerical
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RS
    // Function: lessThanAlphanumerical
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lessThanAlphanumerical
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RS
    // Function: getFontFamily
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getFontFamily
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RS
    // Function: getPageSizeId
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPageSizeId
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RS
    // Function: getPageSize
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPageSize
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RS
    // Function: setUtf8Codec
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setUtf8Codec
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RS
    // Function: escape
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  escape
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RS
    // Function: getScreenCount
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getScreenCount
              (

                
              )
              
              ;
            
    // Class: RS
    // Function: getAvailableGeometry
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getAvailableGeometry
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RS
    // Function: convert
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  convert
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static RS_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RS
    class RS_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RS_Wrapper(const RS_Wrapper&);

    public:
      // initialization of RS:
      static void init(RJSApi& handler);

      
        static RS* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RS:
          for (int i=0; i<basecasters_RS.length(); i++) {
            RJSBasecaster_RS* basecaster = basecasters_RS[i];
            RS* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RS:
          if (t==RJSType_RS::getIdStatic()) {
            return (RS*)vp;
          }

          qWarning() << "RS_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RS* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RS*: wrapper wraps NULL";
          }

          RS* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RS*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum MetaType {
    Bool = RS::Bool,
Char = RS::Char,
Char16 = RS::Char16,
Char32 = RS::Char32,
Double = RS::Double,
Float = RS::Float,
Int = RS::Int,
Long = RS::Long,
LongLong = RS::LongLong,
Nullptr = RS::Nullptr,
BitArray = RS::BitArray,
Bitmap = RS::Bitmap,
Brush = RS::Brush,
ByteArray = RS::ByteArray,
ByteArrayList = RS::ByteArrayList,
CborArray = RS::CborArray,
CborMap = RS::CborMap,
CborSimpleType = RS::CborSimpleType,
CborValue = RS::CborValue,
Color = RS::Color,
ColorSpace = RS::ColorSpace,
Cursor = RS::Cursor,
Date = RS::Date,
DateTime = RS::DateTime,
EasingCurve = RS::EasingCurve,
Font = RS::Font,
Icon = RS::Icon,
Image = RS::Image,
JsonArray = RS::JsonArray,
JsonDocument = RS::JsonDocument,
JsonObject = RS::JsonObject,
JsonValue = RS::JsonValue,
KeySequence = RS::KeySequence,
Line = RS::Line,
LineF = RS::LineF,
Locale = RS::Locale,
Matrix4x4 = RS::Matrix4x4,
ModelIndex = RS::ModelIndex,
ObjectStar = RS::ObjectStar,
Palette = RS::Palette,
Pen = RS::Pen,
PersistentModelIndex = RS::PersistentModelIndex,
Pixmap = RS::Pixmap,
Point = RS::Point,
PointF = RS::PointF,
Polygon = RS::Polygon,
PolygonF = RS::PolygonF,
Quaternion = RS::Quaternion,
Rect = RS::Rect,
RectF = RS::RectF,
Region = RS::Region,
RegularExpression = RS::RegularExpression,
Size = RS::Size,
SizeF = RS::SizeF,
SizePolicy = RS::SizePolicy,
String = RS::String,
StringList = RS::StringList,
TextFormat = RS::TextFormat,
TextLength = RS::TextLength,
Time = RS::Time,
Transform = RS::Transform,
Url = RS::Url,
Uuid = RS::Uuid,
Variant = RS::Variant,
VariantHash = RS::VariantHash,
VariantList = RS::VariantList,
VariantMap = RS::VariantMap,
Vector2D = RS::Vector2D,
Vector3D = RS::Vector3D,
Vector4D = RS::Vector4D,
SChar = RS::SChar,
Short = RS::Short,
UChar = RS::UChar,
UInt = RS::UInt,
ULong = RS::ULong,
ULongLong = RS::ULongLong,
UShort = RS::UShort,
UnknownType = RS::UnknownType,
UserType = RS::UserType,
VoidStar = RS::VoidStar,

  };
  Q_ENUM(MetaType)

  enum MessageType {
    Print = RS::Print,
Debug = RS::Debug,
Warning = RS::Warning,
Critical = RS::Critical,
Command = RS::Command,

  };
  Q_ENUM(MessageType)

  enum EntityType {
    ObjectAll = RS::ObjectAll,
ObjectUnknown = RS::ObjectUnknown,
ObjectLinetype = RS::ObjectLinetype,
ObjectLayer = RS::ObjectLayer,
ObjectBlock = RS::ObjectBlock,
ObjectLayout = RS::ObjectLayout,
ObjectLayerState = RS::ObjectLayerState,
ObjectView = RS::ObjectView,
ObjectUcs = RS::ObjectUcs,
ObjectDocumentVariable = RS::ObjectDocumentVariable,
ObjectDimStyle = RS::ObjectDimStyle,
EntityAll = RS::EntityAll,
EntityUnknown = RS::EntityUnknown,
EntityAttribute = RS::EntityAttribute,
EntityAttributeDefinition = RS::EntityAttributeDefinition,
EntityBlockRef = RS::EntityBlockRef,
EntityBlockRefAttr = RS::EntityBlockRefAttr,
EntityPoint = RS::EntityPoint,
EntityLine = RS::EntityLine,
EntityXLine = RS::EntityXLine,
EntityRay = RS::EntityRay,
EntityPolyline = RS::EntityPolyline,
EntityArc = RS::EntityArc,
EntityCircle = RS::EntityCircle,
EntityEllipse = RS::EntityEllipse,
EntitySolid = RS::EntitySolid,
Entity3dFace = RS::Entity3dFace,
EntityTextBased = RS::EntityTextBased,
EntityText = RS::EntityText,
EntityTrace = RS::EntityTrace,
EntityFace = RS::EntityFace,
EntityDimension = RS::EntityDimension,
EntityDimLinear = RS::EntityDimLinear,
EntityDimAligned = RS::EntityDimAligned,
EntityDimRotated = RS::EntityDimRotated,
EntityDimRadial = RS::EntityDimRadial,
EntityDimDiametric = RS::EntityDimDiametric,
EntityDimAngular = RS::EntityDimAngular,
EntityDimAngular2L = RS::EntityDimAngular2L,
EntityDimAngular3P = RS::EntityDimAngular3P,
EntityDimArcLength = RS::EntityDimArcLength,
EntityDimOrdinate = RS::EntityDimOrdinate,
EntityHatch = RS::EntityHatch,
EntityImage = RS::EntityImage,
EntityLeader = RS::EntityLeader,
EntitySpline = RS::EntitySpline,
EntityViewport = RS::EntityViewport,
EntityTolerance = RS::EntityTolerance,
EntityUser = RS::EntityUser,

  };
  Q_ENUM(EntityType)

  enum ProjectionRenderingHint {
    RenderTop = RS::RenderTop,
RenderSide = RS::RenderSide,
RenderFront = RS::RenderFront,
RenderThreeD = RS::RenderThreeD,

  };
  Q_ENUM(ProjectionRenderingHint)

  enum OrthoMode {
    OrthoVertical = RS::OrthoVertical,
OrthoHorizonal = RS::OrthoHorizonal,
Orthogonal = RS::Orthogonal,

  };
  Q_ENUM(OrthoMode)

  enum Side {
    NoSide = RS::NoSide,
LeftHand = RS::LeftHand,
RightHand = RS::RightHand,
BothSides = RS::BothSides,

  };
  Q_ENUM(Side)

  enum Ending {
    EndingStart = RS::EndingStart,
EndingEnd = RS::EndingEnd,
EndingNone = RS::EndingNone,

  };
  Q_ENUM(Ending)

  enum VAlign {
    VAlignTop = RS::VAlignTop,
VAlignMiddle = RS::VAlignMiddle,
VAlignBase = RS::VAlignBase,
VAlignBottom = RS::VAlignBottom,

  };
  Q_ENUM(VAlign)

  enum HAlign {
    HAlignLeft = RS::HAlignLeft,
HAlignCenter = RS::HAlignCenter,
HAlignRight = RS::HAlignRight,
HAlignAlign = RS::HAlignAlign,
HAlignMid = RS::HAlignMid,
HAlignFit = RS::HAlignFit,

  };
  Q_ENUM(HAlign)

  enum TextDrawingDirection {
    LeftToRight = RS::LeftToRight,
TopToBottom = RS::TopToBottom,
ByStyle = RS::ByStyle,

  };
  Q_ENUM(TextDrawingDirection)

  enum TextLineSpacingStyle {
    AtLeast = RS::AtLeast,
Exact = RS::Exact,

  };
  Q_ENUM(TextLineSpacingStyle)

  enum From {
    FromStart = RS::FromStart,
FromEnd = RS::FromEnd,
FromAny = RS::FromAny,
AlongPolyline = RS::AlongPolyline,

  };
  Q_ENUM(From)

  enum IsoProjectionType {
    NoProjection = RS::NoProjection,
Top = RS::Top,
Bottom = RS::Bottom,
Left = RS::Left,
LeftBack = RS::LeftBack,
Right = RS::Right,
RightBack = RS::RightBack,
Isometric = RS::Isometric,
IsometricTrue = RS::IsometricTrue,
Planometric = RS::Planometric,
Dimetric = RS::Dimetric,
Cabinet = RS::Cabinet,
Cabinet30 = RS::Cabinet30,
Cavalier = RS::Cavalier,
User1 = RS::User1,
User2 = RS::User2,
User3 = RS::User3,
User4 = RS::User4,
IsoTop = RS::IsoTop,
IsoBottom = RS::IsoBottom,
IsoLeft = RS::IsoLeft,
IsoLeftBack = RS::IsoLeftBack,
IsoRight = RS::IsoRight,
IsoRightBack = RS::IsoRightBack,

  };
  Q_ENUM(IsoProjectionType)

  enum Measurement {
    UnknownMeasurement = RS::UnknownMeasurement,
Imperial = RS::Imperial,
Metric = RS::Metric,

  };
  Q_ENUM(Measurement)

  enum Unit {
    None = RS::None,
Inch = RS::Inch,
Foot = RS::Foot,
Mile = RS::Mile,
Millimeter = RS::Millimeter,
Centimeter = RS::Centimeter,
Meter = RS::Meter,
Kilometer = RS::Kilometer,
Microinch = RS::Microinch,
Mil = RS::Mil,
Yard = RS::Yard,
Angstrom = RS::Angstrom,
Nanometer = RS::Nanometer,
Micron = RS::Micron,
Decimeter = RS::Decimeter,
Decameter = RS::Decameter,
Hectometer = RS::Hectometer,
Gigameter = RS::Gigameter,
Astro = RS::Astro,
Lightyear = RS::Lightyear,
Parsec = RS::Parsec,
MaxUnit = RS::MaxUnit,

  };
  Q_ENUM(Unit)

  enum AngleFormat {
    DegreesDecimal = RS::DegreesDecimal,
DegreesMinutesSeconds = RS::DegreesMinutesSeconds,
Gradians = RS::Gradians,
Radians = RS::Radians,
Surveyors = RS::Surveyors,

  };
  Q_ENUM(AngleFormat)

  enum LinearFormat {
    Scientific = RS::Scientific,
Decimal = RS::Decimal,
Engineering = RS::Engineering,
ArchitecturalStacked = RS::ArchitecturalStacked,
FractionalStacked = RS::FractionalStacked,
Architectural = RS::Architectural,
Fractional = RS::Fractional,
WindowsDesktop = RS::WindowsDesktop,

  };
  Q_ENUM(LinearFormat)

  enum AngleUnit {
    Deg = RS::Deg,
Rad = RS::Rad,
Gra = RS::Gra,

  };
  Q_ENUM(AngleUnit)

  enum KnownVariable {
    ANGBASE = RS::ANGBASE,
ANGDIR = RS::ANGDIR,
ATTMODE = RS::ATTMODE,
AUNITS = RS::AUNITS,
AUPREC = RS::AUPREC,
CECOLOR = RS::CECOLOR,
CELTSCALE = RS::CELTSCALE,
CHAMFERA = RS::CHAMFERA,
CHAMFERB = RS::CHAMFERB,
CHAMFERC = RS::CHAMFERC,
CHAMFERD = RS::CHAMFERD,
CLAYER = RS::CLAYER,
CMLJUST = RS::CMLJUST,
CMLSCALE = RS::CMLSCALE,
DIMADEC = RS::DIMADEC,
DIMALT = RS::DIMALT,
DIMALTD = RS::DIMALTD,
DIMALTF = RS::DIMALTF,
DIMALTRND = RS::DIMALTRND,
DIMALTTD = RS::DIMALTTD,
DIMALTTZ = RS::DIMALTTZ,
DIMALTU = RS::DIMALTU,
DIMALTZ = RS::DIMALTZ,
DIMAPOST = RS::DIMAPOST,
DIMASZ = RS::DIMASZ,
DIMATFIT = RS::DIMATFIT,
DIMAUNIT = RS::DIMAUNIT,
DIMAZIN = RS::DIMAZIN,
DIMBLK = RS::DIMBLK,
DIMBLK1 = RS::DIMBLK1,
DIMBLK2 = RS::DIMBLK2,
DIMCEN = RS::DIMCEN,
DIMCLRD = RS::DIMCLRD,
DIMCLRE = RS::DIMCLRE,
DIMCLRT = RS::DIMCLRT,
DIMDEC = RS::DIMDEC,
DIMDLE = RS::DIMDLE,
DIMDLI = RS::DIMDLI,
DIMDSEP = RS::DIMDSEP,
DIMEXE = RS::DIMEXE,
DIMEXO = RS::DIMEXO,
DIMFRAC = RS::DIMFRAC,
DIMGAP = RS::DIMGAP,
DIMJUST = RS::DIMJUST,
DIMLDRBLK = RS::DIMLDRBLK,
DIMLFAC = RS::DIMLFAC,
DIMLIM = RS::DIMLIM,
DIMLUNIT = RS::DIMLUNIT,
DIMLWD = RS::DIMLWD,
DIMLWE = RS::DIMLWE,
DIMPOST = RS::DIMPOST,
DIMRND = RS::DIMRND,
DIMSAH = RS::DIMSAH,
DIMSCALE = RS::DIMSCALE,
DIMSD1 = RS::DIMSD1,
DIMSD2 = RS::DIMSD2,
DIMSE1 = RS::DIMSE1,
DIMSE2 = RS::DIMSE2,
DIMSOXD = RS::DIMSOXD,
DIMTAD = RS::DIMTAD,
DIMTDEC = RS::DIMTDEC,
DIMTFAC = RS::DIMTFAC,
DIMTIH = RS::DIMTIH,
DIMTIX = RS::DIMTIX,
DIMTM = RS::DIMTM,
DIMTOFL = RS::DIMTOFL,
DIMTOH = RS::DIMTOH,
DIMTOL = RS::DIMTOL,
DIMTOLJ = RS::DIMTOLJ,
DIMTP = RS::DIMTP,
DIMTSZ = RS::DIMTSZ,
DIMTVP = RS::DIMTVP,
DIMTXSTY = RS::DIMTXSTY,
DIMTXT = RS::DIMTXT,
DIMTZIN = RS::DIMTZIN,
DIMUPT = RS::DIMUPT,
DIMZIN = RS::DIMZIN,
DISPSILH = RS::DISPSILH,
DWGCODEPAGE = RS::DWGCODEPAGE,
DRAWORDERCTL = RS::DRAWORDERCTL,
ELEVATION = RS::ELEVATION,
EXTMAX = RS::EXTMAX,
EXTMIN = RS::EXTMIN,
FACETRES = RS::FACETRES,
FILLETRAD = RS::FILLETRAD,
FILLMODE = RS::FILLMODE,
INSBASE = RS::INSBASE,
INSUNITS = RS::INSUNITS,
ISOLINES = RS::ISOLINES,
LIMCHECK = RS::LIMCHECK,
LIMMAX = RS::LIMMAX,
LIMMIN = RS::LIMMIN,
LTSCALE = RS::LTSCALE,
LUNITS = RS::LUNITS,
LUPREC = RS::LUPREC,
MAXACTVP = RS::MAXACTVP,
MEASUREMENT = RS::MEASUREMENT,
MIRRTEXT = RS::MIRRTEXT,
ORTHOMODE = RS::ORTHOMODE,
PDMODE = RS::PDMODE,
PDSIZE = RS::PDSIZE,
PELEVATION = RS::PELEVATION,
PELLIPSE = RS::PELLIPSE,
PEXTMAX = RS::PEXTMAX,
PEXTMIN = RS::PEXTMIN,
PINSBASE = RS::PINSBASE,
PLIMCHECK = RS::PLIMCHECK,
PLIMMAX = RS::PLIMMAX,
PLIMMIN = RS::PLIMMIN,
PLINEGEN = RS::PLINEGEN,
PLINEWID = RS::PLINEWID,
PROXYGRAPHICS = RS::PROXYGRAPHICS,
PSLTSCALE = RS::PSLTSCALE,
PUCSNAME = RS::PUCSNAME,
PUCSORG = RS::PUCSORG,
PUCSXDIR = RS::PUCSXDIR,
PUCSYDIR = RS::PUCSYDIR,
QTEXTMODE = RS::QTEXTMODE,
REGENMODE = RS::REGENMODE,
SHADEDGE = RS::SHADEDGE,
SHADEDIF = RS::SHADEDIF,
SKETCHINC = RS::SKETCHINC,
SKPOLY = RS::SKPOLY,
SPLFRAME = RS::SPLFRAME,
SPLINESEGS = RS::SPLINESEGS,
SPLINETYPE = RS::SPLINETYPE,
SURFTAB1 = RS::SURFTAB1,
SURFTAB2 = RS::SURFTAB2,
SURFTYPE = RS::SURFTYPE,
SURFU = RS::SURFU,
SURFV = RS::SURFV,
TEXTQLTY = RS::TEXTQLTY,
TEXTSIZE = RS::TEXTSIZE,
TEXTSTYLE = RS::TEXTSTYLE,
THICKNESS = RS::THICKNESS,
TILEMODE = RS::TILEMODE,
TRACEWID = RS::TRACEWID,
TREEDEPTH = RS::TREEDEPTH,
UCSNAME = RS::UCSNAME,
UCSORG = RS::UCSORG,
UCSXDIR = RS::UCSXDIR,
UCSYDIR = RS::UCSYDIR,
UNITMODE = RS::UNITMODE,
USERI1 = RS::USERI1,
USERI2 = RS::USERI2,
USERI3 = RS::USERI3,
USERI4 = RS::USERI4,
USERI5 = RS::USERI5,
USERR1 = RS::USERR1,
USERR2 = RS::USERR2,
USERR3 = RS::USERR3,
USERR4 = RS::USERR4,
USERR5 = RS::USERR5,
USRTIMER = RS::USRTIMER,
VISRETAIN = RS::VISRETAIN,
WORLDVIEW = RS::WORLDVIEW,
MaxKnownVariable = RS::MaxKnownVariable,
INVALID = RS::INVALID,

  };
  Q_ENUM(KnownVariable)

  enum KnownVariableType {
    VarTypeBool = RS::VarTypeBool,
VarTypeInt = RS::VarTypeInt,
VarTypeDouble = RS::VarTypeDouble,
VarTypeColor = RS::VarTypeColor,
VarTypeUnknown = RS::VarTypeUnknown,

  };
  Q_ENUM(KnownVariableType)

  enum BooleanOperation {
    Intersection = RS::Intersection,
Union = RS::Union,
Difference = RS::Difference,
Xor = RS::Xor,

  };
  Q_ENUM(BooleanOperation)

  enum FillType {
    EvenOdd = RS::EvenOdd,
NonZero = RS::NonZero,
Positive = RS::Positive,
Negative = RS::Negative,

  };
  Q_ENUM(FillType)

  enum Orientation {
    UnknownOrientation = RS::UnknownOrientation,
Any = RS::Any,
CW = RS::CW,
CCW = RS::CCW,

  };
  Q_ENUM(Orientation)

  enum JoinType {
    JoinBevel = RS::JoinBevel,
JoinRound = RS::JoinRound,
JoinMiter = RS::JoinMiter,

  };
  Q_ENUM(JoinType)

  enum EndType {
    EndClosedPolygon = RS::EndClosedPolygon,
EndClosedLine = RS::EndClosedLine,
EndOpenButt = RS::EndOpenButt,
EndOpenSquare = RS::EndOpenSquare,
EndOpenRound = RS::EndOpenRound,
EndOpenSingle = RS::EndOpenSingle,

  };
  Q_ENUM(EndType)

  enum Easing {
    Linear = RS::Linear,
InQuad = RS::InQuad,
OutQuad = RS::OutQuad,
InOutQuad = RS::InOutQuad,
OutInQuad = RS::OutInQuad,
InCubic = RS::InCubic,
OutCubic = RS::OutCubic,
InOutCubic = RS::InOutCubic,
OutInCubic = RS::OutInCubic,
InQuart = RS::InQuart,
OutQuart = RS::OutQuart,
InOutQuart = RS::InOutQuart,
OutInQuart = RS::OutInQuart,
InQuint = RS::InQuint,
OutQuint = RS::OutQuint,
InOutQuint = RS::InOutQuint,
OutInQuint = RS::OutInQuint,
InSine = RS::InSine,
OutSine = RS::OutSine,
InOutSine = RS::InOutSine,
OutInSine = RS::OutInSine,
InExpo = RS::InExpo,
OutExpo = RS::OutExpo,
InOutExpo = RS::InOutExpo,
OutInExpo = RS::OutInExpo,
InCirc = RS::InCirc,
OutCirc = RS::OutCirc,
InOutCirc = RS::InOutCirc,
OutInCirc = RS::OutInCirc,
InElastic = RS::InElastic,
OutElastic = RS::OutElastic,
InOutElastic = RS::InOutElastic,
OutInElastic = RS::OutInElastic,
InBack = RS::InBack,
OutBack = RS::OutBack,
InOutBack = RS::InOutBack,
OutInBack = RS::OutInBack,
InBounce = RS::InBounce,
OutBounce = RS::OutBounce,
InOutBounce = RS::InOutBounce,
OutInBounce = RS::OutInBounce,

  };
  Q_ENUM(Easing)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RS_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RS_Wrapper(RJSApi& h, RS* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RS_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RS
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RS_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
              )
              
              ;
            

    // non-static functions:
    

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_RS::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        RS* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RS* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        RS* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RS*> basecasters_RS;

      public:
        static void registerBasecaster_RS(RJSBasecaster_RS* bc) {
          basecasters_RS.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RS_Wrapper*)

    Q_DECLARE_INTERFACE(RS_Wrapper, "org.qcad.RS_Wrapper")

  
  #endif
  
