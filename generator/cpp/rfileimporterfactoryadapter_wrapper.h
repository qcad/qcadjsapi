
  // Auto generated
  
    #ifndef RFILEIMPORTERFACTORYADAPTER_H_WRAPPER
    #define RFILEIMPORTERFACTORYADAPTER_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RFileImporter.h"
      
        #include "RMessageHandler.h"
      
        #include "RProgressHandler.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RFileImporterFactoryAdapter.h"
      
      // wrapped object is RFileImporterFactoryAdapter_Base class if new object is created: 
      #include "rfileimporterfactoryadapter_base.h"
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RFileImporterFactoryAdapter
    class RFileImporterFactoryAdapter_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RFileImporterFactoryAdapter_Wrapper(const RFileImporterFactoryAdapter_Wrapper&);

    public:
      // initialization of RFileImporterFactoryAdapter:
      static void init(RJSApi& handler);

      
        static RFileImporterFactoryAdapter* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_RFileImporterFactoryAdapter.length(); i++) {
            RJSBasecaster_RFileImporterFactoryAdapter* basecaster = basecasters_RFileImporterFactoryAdapter[i];
            RFileImporterFactoryAdapter* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_RFileImporterFactoryAdapter::getIdStatic()) {
            return (RFileImporterFactoryAdapter*)vp;
          }

          qWarning() << "RFileImporterFactoryAdapter::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static RFileImporterFactoryAdapter* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RFileImporterFactoryAdapter*: wrapper wraps NULL";
          }

          RFileImporterFactoryAdapter* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RFileImporterFactoryAdapter*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RFileImporterFactoryAdapter_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RFileImporterFactoryAdapter_Wrapper(RJSApi& h, RFileImporterFactoryAdapter* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RFileImporterFactoryAdapter_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RFileImporterFactoryAdapter
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RFileImporterFactoryAdapter_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
              )
              
              ;
            

    // non-static functions:
    
    // Class: RFileImporterFactoryAdapter
    // Function: getFilterStrings
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      getFilterStringsSuper
                    
              (

                
              )
              
              ;
            
    // Class: RFileImporterFactoryAdapter
    // Function: canImport
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      canImportSuper
                    
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
            
    // Class: RFileImporterFactoryAdapter
    // Function: instantiate
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      instantiateSuper
                    
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
          return RJSType_RFileImporterFactoryAdapter::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RFileImporterFactoryAdapter* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RFileImporterFactoryAdapter* getWrapped() const {
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
          RFileImporterFactoryAdapter_Base* getWrappedBase() {
            RFileImporterFactoryAdapter* w = getWrapped();
            return dynamic_cast<RFileImporterFactoryAdapter_Base*>(w);
          }

          RFileImporterFactoryAdapter_Base* getWrappedBase() const {
            RFileImporterFactoryAdapter* w = getWrapped();
            return dynamic_cast<RFileImporterFactoryAdapter_Base*>(w);
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
          //  RFileImporterFactoryAdapter_Base* wb = getWrappedBase();
          //  if (wb) {
          //    wb->setRecFlag(on);
          //  }
          //}
        

        private:
        // wrapped object:
        RFileImporterFactoryAdapter* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RFileImporterFactoryAdapter*> basecasters_RFileImporterFactoryAdapter;

      public:
        static void registerBasecaster_RFileImporterFactoryAdapter(RJSBasecaster_RFileImporterFactoryAdapter* bc) {
          basecasters_RFileImporterFactoryAdapter.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RFileImporterFactoryAdapter_Wrapper*)

    Q_DECLARE_INTERFACE(RFileImporterFactoryAdapter_Wrapper, "org.qcad.RFileImporterFactoryAdapter_Wrapper")

  
  #endif
  
