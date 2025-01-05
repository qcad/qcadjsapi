
  // Auto generated
  
    #ifndef RSNAPRESTRICTION_H_WRAPPER
    #define RSNAPRESTRICTION_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RDocumentInterface.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RSnapRestriction.h"
      
      // wrapped object is RSnapRestriction_Base class if new object is created: 
      #include "rsnaprestriction_base.h"
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RSnapRestriction
    class QCADJSAPI_EXPORT 
     RSnapRestriction_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RSnapRestriction_Wrapper(const RSnapRestriction_Wrapper&);

    public:
      // initialization of RSnapRestriction:
      static void init(RJSApi& handler);

      
        static RSnapRestriction* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RSnapRestriction:
          for (int i=0; i<basecasters_RSnapRestriction.length(); i++) {
            RJSBasecaster_RSnapRestriction* basecaster = basecasters_RSnapRestriction[i];
            RSnapRestriction* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RSnapRestriction:
          if (t==RJSType_RSnapRestriction::getIdStatic()) {
            return (RSnapRestriction*)vp;
          }

          qWarning() << "RSnapRestriction_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RSnapRestriction* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RSnapRestriction*: wrapper wraps NULL";
          }

          RSnapRestriction* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RSnapRestriction*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RSnapRestriction_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RSnapRestriction_Wrapper(RJSApi& h, RSnapRestriction* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RSnapRestriction_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: RSnapRestriction
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
            
    // Class: RSnapRestriction
    // Function: getLastSnap
    // Source: 
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
            
    // Class: RSnapRestriction
    // Function: reset
    // Source: 
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
          return RJSType_RSnapRestriction::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RSnapRestriction* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        RSnapRestriction* getWrapped() const {
          
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
          RSnapRestriction_Base* getWrappedBase() {
            RSnapRestriction* w = getWrapped();
            return dynamic_cast<RSnapRestriction_Base*>(w);
          }

          RSnapRestriction_Base* getWrappedBase() const {
            RSnapRestriction* w = getWrapped();
            return dynamic_cast<RSnapRestriction_Base*>(w);
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
          //  RSnapRestriction_Base* wb = getWrappedBase();
          //  if (wb) {
          //    wb->setRecFlag(on);
          //  }
          //}
        

        private:

        
          // wrapped object:
          RSnapRestriction* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RSnapRestriction*> basecasters_RSnapRestriction;

      public:
        static void registerBasecaster_RSnapRestriction(RJSBasecaster_RSnapRestriction* bc) {
          basecasters_RSnapRestriction.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RSnapRestriction_Wrapper*)

    Q_DECLARE_INTERFACE(RSnapRestriction_Wrapper, "org.qcad.RSnapRestriction_Wrapper")

  
  #endif
  
