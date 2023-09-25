

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef RFILEIMPORTERFACTORYADAPTER_H_BASE
  #define RFILEIMPORTERFACTORYADAPTER_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      
    #include <QQmlEngine>

    
        #include "RFileImporterFactoryAdapter.h"
      
    // Base class for RFileImporterFactoryAdapter
      class RFileImporterFactoryAdapter_Base : public RFileImporterFactoryAdapter {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: RFileImporterFactoryAdapter
  // Function: 
  // Parameters: 0
  // preceding Parameters: -1
RFileImporterFactoryAdapter_Base
        
      (

        
          RJSApi& _h
          
      )
      
        : RFileImporterFactoryAdapter(
          
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~RFileImporterFactoryAdapter_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    
      // protected overwritten functions / events and their public invokable counterparts:
      

      // public virtual overwritten functions / events:
      
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual QStringList getFilterStrings(
      
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual QStringList getFilterStringsSup(
        
      )
      
      {
        
          return
        RFileImporterFactoryAdapter::getFilterStrings(
          
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual int canImport(
      const QString& fileName, const QString& nameFilter=""
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual int canImportSup(
        const QString& fileName, const QString& nameFilter=""
      )
      
      {
        
          return
        RFileImporterFactoryAdapter::canImport(
          fileName, nameFilter
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual RFileImporter* instantiate(
      RDocument& document, RMessageHandler* messageHandler=NULL, RProgressHandler* progressHandler=NULL
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual RFileImporter* instantiateSup(
        RDocument& document, RMessageHandler* messageHandler=NULL, RProgressHandler* progressHandler=NULL
      )
      
      {
        
          return
        RFileImporterFactoryAdapter::instantiate(
          document, messageHandler, progressHandler
        );
      }
    

      // public pure-virtual functions:
      

    public:
      //void setRecFlag(bool on) {
      //  recFlag = on;
      //}

    public:
      QJSValue self;

    private:
      
        RJSApi& handler;
      
      //bool recFlag;

    };
    
  #endif
  