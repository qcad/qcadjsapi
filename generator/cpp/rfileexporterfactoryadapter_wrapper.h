
  // Auto generated
  
    #ifndef RFILEEXPORTERFACTORYADAPTER_H_WRAPPER
    #define RFILEEXPORTERFACTORYADAPTER_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RDocument.h"
      
        #include "RMessageHandler.h"
      
        #include "RProgressHandler.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RFileExporterFactoryAdapter.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RFileExporterFactoryAdapter
    class QCADJSAPI_EXPORT 
     RFileExporterFactoryAdapter_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RFileExporterFactoryAdapter_Wrapper(const RFileExporterFactoryAdapter_Wrapper&);

    public:
      // initialization of RFileExporterFactoryAdapter:
      static void init(RJSApi& handler);

      
        static RFileExporterFactoryAdapter* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RFileExporterFactoryAdapter:
          for (int i=0; i<basecasters_RFileExporterFactoryAdapter.length(); i++) {
            RJSBasecaster_RFileExporterFactoryAdapter* basecaster = basecasters_RFileExporterFactoryAdapter[i];
            RFileExporterFactoryAdapter* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RFileExporterFactoryAdapter:
          if (t==RJSType_RFileExporterFactoryAdapter::getIdStatic()) {
            return (RFileExporterFactoryAdapter*)vp;
          }

          qWarning() << "RFileExporterFactoryAdapter_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RFileExporterFactoryAdapter* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RFileExporterFactoryAdapter*: wrapper wraps NULL";
          }

          RFileExporterFactoryAdapter* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RFileExporterFactoryAdapter*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RFileExporterFactoryAdapter_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RFileExporterFactoryAdapter_Wrapper(RJSApi& h, RFileExporterFactoryAdapter* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RFileExporterFactoryAdapter_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RFileExporterFactoryAdapter
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RFileExporterFactoryAdapter_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
              )
              
              ;
            

    // non-static functions:
    
    // Class: RFileExporterFactoryAdapter
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
            
    // Class: RFileExporterFactoryAdapter
    // Function: canExport
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      canExportSuper
                    
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
            
    // Class: RFileExporterFactoryAdapter
    // Function: instantiate
    // Source: 
    // Static: false
    // Parameters: 1
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
          return RJSType_RFileExporterFactoryAdapter::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RFileExporterFactoryAdapter* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        RFileExporterFactoryAdapter* getWrapped() const {
          
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
          RFileExporterFactoryAdapter* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RFileExporterFactoryAdapter*> basecasters_RFileExporterFactoryAdapter;

      public:
        static void registerBasecaster_RFileExporterFactoryAdapter(RJSBasecaster_RFileExporterFactoryAdapter* bc) {
          basecasters_RFileExporterFactoryAdapter.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RFileExporterFactoryAdapter_Wrapper*)

    Q_DECLARE_INTERFACE(RFileExporterFactoryAdapter_Wrapper, "org.qcad.RFileExporterFactoryAdapter_Wrapper")

  
  #endif
  
