
  // Auto generated
  
    #ifndef RGRAPHICSSCENEDRAWABLE_H_WRAPPER
    #define RGRAPHICSSCENEDRAWABLE_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RGraphicsSceneDrawable.h"
      
      // singleton class wrapper for static functions:
      class RGraphicsSceneDrawable_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      RGraphicsSceneDrawable_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: RGraphicsSceneDrawable
    // Function: createFromPainterPath
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  createFromPainterPath
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
            
    // Class: RGraphicsSceneDrawable
    // Function: createFromImage
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  createFromImage
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
            
    // Class: RGraphicsSceneDrawable
    // Function: createFromText
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  createFromText
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
            
    // Class: RGraphicsSceneDrawable
    // Function: createFromTransform
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  createFromTransform
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
            
    // Class: RGraphicsSceneDrawable
    // Function: createEndTransform
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  createEndTransform
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static RGraphicsSceneDrawable_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RGraphicsSceneDrawable
    class RGraphicsSceneDrawable_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RGraphicsSceneDrawable_Wrapper(const RGraphicsSceneDrawable_Wrapper&);

    public:
      // initialization of RGraphicsSceneDrawable:
      static void init(RJSApi& handler);

      
        static RGraphicsSceneDrawable* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_RGraphicsSceneDrawable.length(); i++) {
            RJSBasecaster_RGraphicsSceneDrawable* basecaster = basecasters_RGraphicsSceneDrawable[i];
            RGraphicsSceneDrawable* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_RGraphicsSceneDrawable::getIdStatic()) {
            return (RGraphicsSceneDrawable*)vp;
          }

          qWarning() << "RGraphicsSceneDrawable_Wrapper::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static RGraphicsSceneDrawable* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RGraphicsSceneDrawable*: wrapper wraps NULL";
          }

          RGraphicsSceneDrawable* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RGraphicsSceneDrawable*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Type {
    Invalid = RGraphicsSceneDrawable::Invalid,
PainterPath = RGraphicsSceneDrawable::PainterPath,
PainterPathRay = RGraphicsSceneDrawable::PainterPathRay,
PainterPathXLine = RGraphicsSceneDrawable::PainterPathXLine,
Image = RGraphicsSceneDrawable::Image,
Text = RGraphicsSceneDrawable::Text,
Transform = RGraphicsSceneDrawable::Transform,
EndTransform = RGraphicsSceneDrawable::EndTransform,

  };
  Q_ENUM(Type)

  enum Mode {
    NoMode = RGraphicsSceneDrawable::NoMode,
NoPlot = RGraphicsSceneDrawable::NoPlot,
PixelUnit = RGraphicsSceneDrawable::PixelUnit,
WorkingSet = RGraphicsSceneDrawable::WorkingSet,

  };
  Q_ENUM(Mode)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RGraphicsSceneDrawable_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RGraphicsSceneDrawable_Wrapper(RJSApi& h, RGraphicsSceneDrawable* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RGraphicsSceneDrawable_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RGraphicsSceneDrawable
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RGraphicsSceneDrawable_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: RGraphicsSceneDrawable
    // Function: uninit
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  uninit
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneDrawable
    // Function: getType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getType
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneDrawable
    // Function: isPainterPath
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isPainterPath
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneDrawable
    // Function: isText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isText
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneDrawable
    // Function: isImage
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isImage
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneDrawable
    // Function: setMode
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMode
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
            
    // Class: RGraphicsSceneDrawable
    // Function: getMode
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getMode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneDrawable
    // Function: setNoPlot
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setNoPlot
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneDrawable
    // Function: getNoPlot
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getNoPlot
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneDrawable
    // Function: setPixelUnit
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPixelUnit
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneDrawable
    // Function: getPixelUnit
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPixelUnit
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneDrawable
    // Function: setWorkingSet
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWorkingSet
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneDrawable
    // Function: isWorkingSet
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isWorkingSet
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneDrawable
    // Function: getPainterPath
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPainterPath
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneDrawable
    // Function: getImage
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getImage
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneDrawable
    // Function: getText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getText
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneDrawable
    // Function: getTransform
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getTransform
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneDrawable
    // Function: getOffset
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getOffset
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneDrawable
    // Function: setOffset
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setOffset
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneDrawable
    // Function: getDocument
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneDrawable
    // Function: setSelected
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSelected
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneDrawable
    // Function: setHighlighted
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHighlighted
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

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
          return RJSType_RGraphicsSceneDrawable::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        RGraphicsSceneDrawable* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RGraphicsSceneDrawable* getWrapped() const {
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
        RGraphicsSceneDrawable* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RGraphicsSceneDrawable*> basecasters_RGraphicsSceneDrawable;

      public:
        static void registerBasecaster_RGraphicsSceneDrawable(RJSBasecaster_RGraphicsSceneDrawable* bc) {
          basecasters_RGraphicsSceneDrawable.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RGraphicsSceneDrawable_Wrapper*)

    Q_DECLARE_INTERFACE(RGraphicsSceneDrawable_Wrapper, "org.qcad.RGraphicsSceneDrawable_Wrapper")

  
  #endif
  
