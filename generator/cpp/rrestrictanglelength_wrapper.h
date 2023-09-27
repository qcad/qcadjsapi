
  // Auto generated
  
    #ifndef RRESTRICTANGLELENGTH_H_WRAPPER
    #define RRESTRICTANGLELENGTH_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RDocumentInterface.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RRestrictAngleLength.h"
      
      // wrapped object is RRestrictAngleLength_Base class if new object is created: 
      #include "rrestrictanglelength_base.h"
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RRestrictAngleLength
    class RRestrictAngleLength_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RRestrictAngleLength_Wrapper(const RRestrictAngleLength_Wrapper&);

    public:
      // initialization of RRestrictAngleLength:
      static void init(RJSApi& handler);

      
        static RRestrictAngleLength* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_RRestrictAngleLength.length(); i++) {
            RJSBasecaster_RRestrictAngleLength* basecaster = basecasters_RRestrictAngleLength[i];
            RRestrictAngleLength* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_RRestrictAngleLength::getIdStatic()) {
            return (RRestrictAngleLength*)vp;
          }

          qWarning() << "RRestrictAngleLength_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RRestrictAngleLength* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RRestrictAngleLength*: wrapper wraps NULL";
          }

          RRestrictAngleLength* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RRestrictAngleLength*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum AngleLengthMode {
    None = RRestrictAngleLength::None,
Angle = RRestrictAngleLength::Angle,
Length = RRestrictAngleLength::Length,
AngleLength = RRestrictAngleLength::AngleLength,

  };
  Q_ENUM(AngleLengthMode)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RRestrictAngleLength_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RRestrictAngleLength_Wrapper(RJSApi& h, RRestrictAngleLength* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RRestrictAngleLength_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RRestrictAngleLength
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RRestrictAngleLength_Wrapper
                
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
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    , 
  const QJSValue& 
  a5
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: RRestrictAngleLength
    // Function: showUiOptions
    // Source: RSnapRestriction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      showUiOptionsSuper
                    
              (

                
              )
              
              ;
            
    // Class: RRestrictAngleLength
    // Function: hideUiOptions
    // Source: RSnapRestriction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      hideUiOptionsSuper
                    
              (

                
              )
              
              ;
            
    // Class: RRestrictAngleLength
    // Function: getLastSnap
    // Source: RSnapRestriction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getLastSnap
              (

                
              )
              
                const
              
              ;
            
    // Class: RRestrictAngleLength
    // Function: reset
    // Source: RSnapRestriction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  reset
              (

                
              )
              
              ;
            
    // Class: RRestrictAngleLength
    // Function: restrictSnap
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  restrictSnap
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
            
    // Class: RRestrictAngleLength
    // Function: setBaseAngle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBaseAngle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RRestrictAngleLength
    // Function: setAngle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAngle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RRestrictAngleLength
    // Function: setBaseLength
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBaseLength
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RRestrictAngleLength
    // Function: setLength
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLength
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RRestrictAngleLength
    // Function: setRestrictAngle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setRestrictAngle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RRestrictAngleLength
    // Function: setRestrictLength
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setRestrictLength
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            if (wrapped!=nullptr) {
              
                  delete wrapped;
                
              wrapped = nullptr;
            }
            
          }
        

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
          return RJSType_RRestrictAngleLength::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RRestrictAngleLength* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RRestrictAngleLength* getWrapped() const {
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

        
          // get wrapped base object or nullptr:
          RRestrictAngleLength_Base* getWrappedBase() {
            RRestrictAngleLength* w = getWrapped();
            return dynamic_cast<RRestrictAngleLength_Base*>(w);
          }

          RRestrictAngleLength_Base* getWrappedBase() const {
            RRestrictAngleLength* w = getWrapped();
            return dynamic_cast<RRestrictAngleLength_Base*>(w);
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

        
          //void setRecFlag(bool on) const {
          //  RRestrictAngleLength_Base* wb = getWrappedBase();
          //  if (wb) {
          //    wb->setRecFlag(on);
          //  }
          //}
        

        private:
        // wrapped object:
        RRestrictAngleLength* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RRestrictAngleLength*> basecasters_RRestrictAngleLength;

      public:
        static void registerBasecaster_RRestrictAngleLength(RJSBasecaster_RRestrictAngleLength* bc) {
          basecasters_RRestrictAngleLength.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RRestrictAngleLength_Wrapper*)

    Q_DECLARE_INTERFACE(RRestrictAngleLength_Wrapper, "org.qcad.RRestrictAngleLength_Wrapper")

  
  #endif
  
