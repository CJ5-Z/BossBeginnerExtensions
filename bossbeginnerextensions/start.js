let _modPath;

exports.initialize = (modPath) => {
    _modPath = modPath;

    //New Components
        //Developer
    ComponentNames.NewDataTypes = 'newdatatypes';
    Components.push({
        name: ComponentNames.NewDataTypes,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'graphics/developer/newdatatypes.png',
        employeeTypeName: Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 2
    });
    ComponentNames.ProgrammingMath = 'programmingmath';
    Components.push({
        name: ComponentNames.ProgrammingMath,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'graphics/developer/programmingmath.png',
        employeeTypeName: Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 3
    });
    ComponentNames.BasicAlgorithm = 'basicalgorithm';
    Components.push({
        name: ComponentNames.BasicAlgorithm,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'graphics/developer/basicalgorithm.png',
        employeeTypeName: Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 3
    });
    ComponentNames.ServerSideProcess = 'serversideprocess';
    Components.push({
        name: ComponentNames.ServerSideProcess,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'graphics/developer/serversideprocess.png',
        employeeTypeName: Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 4
    });
    ComponentNames.ScriptingAPI = 'scriptingapi';
    Components.push({
        name: ComponentNames.ScriptingAPI,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'graphics/developer/scriptingapi.png',
        employeeTypeName: Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 4
    });
    ComponentNames.FileManager = 'filemanager';
    Components.push({
        name: ComponentNames.FileManager,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'graphics/developer/filemanager.png',
        employeeTypeName: Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 4
    });
        //Designer
    ComponentNames.CSSPack = 'csspack';
    Components.push({
        name: ComponentNames.FrameworkModule,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'graphics/designer/csspack.png',
        employeeTypeName:Enums.EmployeeTypeNames.Designer,
        type: ComponentTypes.Module,
        requirements: {
            'csscomponent': 1,
            'aestheticscomponent': 1
        }
    });
    ComponentNames.DeveloperIntegration = 'developerintegration';
    Components.push({
        name: ComponentNames.DeveloperIntegration,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'graphics/designer/developerintegration.png',
        employeeTypeName: Enums.EmployeeTypeNames.Designer,
        type: ComponentTypes.Component,
        produceHours: 4
    });
    ComponentNames.DesignAPI = 'designapi';
    Components.push({
        name: ComponentNames.DesignAPI,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'graphics/designer/designapi.png',
        employeeTypeName: Enums.EmployeeTypeNames.Designer,
        type: ComponentTypes.Component,
        produceHours: 2
    });
    ComponentNames.ColorPalette = 'colorpalette';
    Components.push({
        name: ComponentNames.ColorPalette,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'graphics/designer/colorpalette.png',
        employeeTypeName: Enums.EmployeeTypeNames.Designer,
        type: ComponentTypes.Component,
        produceHours: 4
    });
    ComponentNames.AestheticAsset = 'aestheticasset';
    Components.push({
        name: ComponentNames.AestheticAsset,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'graphics/designer/aestheticasset.png',
        employeeTypeName: Enums.EmployeeTypeNames.Designer,
        type: ComponentTypes.Component,
        produceHours: 4
    });
        //SysAdmin
    ComponentNames.VerificationComponent = 'verificationcomponent';
    Components.push({
        name: ComponentNames.VerificationComponent,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'graphics/sysadmin/verificationcomponent.png',
        employeeTypeName: Enums.EmployeeTypeNames.SysAdmin,
        type: ComponentTypes.Component,
        produceHours: 4
    });
    ComponentNames.AuthComponent = 'authcomponent';
    Components.push({
        name: ComponentNames.AuthComponent,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'graphics/sysadmin/authcomponent.png',
        employeeTypeName: Enums.EmployeeTypeNames.SysAdmin,
        type: ComponentTypes.Component,
        produceHours: 4
    });
        //Lead Developer
    ComponentNames.BeginnerDevModule = 'beginnerdevmodule';
    Components.push({
        name: ComponentNames.BeginnerDevModule,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'graphics/leaddev/beginnerdevmodule.png',
        employeeTypeName:Enums.EmployeeTypeNames.LeadDeveloper,
        type: ComponentTypes.Module,
        requirements: {
            'UiComponent': 1,
            'NetworkComponent': 1,
            'DatabaseComponent': 1,
            'basicinterface': 1,
            'newdatatypes': 1,
            'scriptingapi': 1,
            'filemanager': 1
        }
    });
    ComponentNames.BeginnerDesignerModule = 'beginnerdesignermodule';
    Components.push({
        name: ComponentNames.BeginnerDesignerModule,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'graphics/leaddev/beginnerdesignermodule.png',
        employeeTypeName:Enums.EmployeeTypeNames.LeadDeveloper,
        type: ComponentTypes.Module,
        requirements: {
            'BlueprintComponent': 1,
            'GraphicsComponent': 1,
            'UiElement': 1,
            'csscomponent': 1,
            'csspack': 1,
            'colorpalette': 1,
            'designapi': 1
        }
    });
    ComponentNames.PresentationModule = 'presentationmodule';
    Components.push({
        name: ComponentNames.PresentationModule,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'graphics/leaddev/presentationmodule.png',
        employeeTypeName:Enums.EmployeeTypeNames.LeadDeveloper,
        type: ComponentTypes.Module,
        requirements: {
            'GraphicsComponent': 1,
            'csscomponent': 1,
            'aestheticscomponent': 1,
            'csspack': 1,
            'csspack': 1,
            'colorpalette': 1,
            'aestheticasset': 1
        }
    });
    ComponentNames.CrossoverModule = 'crossovermodule';
    Components.push({
        name: ComponentNames.CrossoverModule,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'graphics/leaddev/crossovermodule.png',
        employeeTypeName:Enums.EmployeeTypeNames.LeadDeveloper,
        type: ComponentTypes.Module,
        requirements: {
            'BackendComponent': 1,
            'WireframeComponent': 1,
            'serversideprocess': 1,
            'developerintegration': 1
        }
    });
    ComponentNames.ProgramModule = 'programmodule';
    Components.push({
        name: ComponentNames.ProgramModule,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'graphics/leaddev/programmodule.png',
        employeeTypeName:Enums.EmployeeTypeNames.LeadDeveloper,
        type: ComponentTypes.Module,
        requirements: {
            'newdatatypes': 1,
            'programmingmath': 1,
            'basicalgorithm': 1
        }
    });

    //Adding components and modules to respective research
    ResearchItems.find(item => item.name == ResearchItemNames.BeginnerDevkit).unlocks.push(
        ComponentNames.NewDataTypes,
        ComponentNames.ProgrammingMath,
        ComponentNames.BasicAlgorithm,
        ComponentNames.ServerSideProcess,
        ComponentNames.ScriptingAPI,
        ComponentNames.FileManager
    )
    ResearchItems.find(item => item.name == ResearchItemNames.BeginnerDesignerKit).unlocks.push(
        ComponentNames.CSSPack,
        ComponentNames.DeveloperIntegration,
        ComponentNames.DesignAPI,
        ComponentNames.ColorPalette,
        ComponentNames.AestheticAsset
    )
    ResearchItems.find(item => item.name == ResearchItemNames.BeginnerSysAdminKit).unlocks.push(
        ComponentNames.VerificationComponent,
        ComponentNames.AuthComponent
    )
    ResearchItems.find(item => item.name == ResearchItemNames.BeginnerLeadDevkit).unlocks.push(
        ComponentNames.BeginnerDevModule,
        ComponentNames.BeginnerDesignerModule,
        ComponentNames.ProgramModule,
        ComponentNames.PresentationModule,
        ComponentNames.CrossoverModule
    )

    //Updated Lead Developer module recipes
    Components.find(component => component.name == ComponentNames.InterfaceModule).requirements = 
    {
        "UiElement": 2,
        "WireframeComponent": 1,
        "basicinterface": 1,
        "scriptingapi": 1
    }
    Components.find(component => component.name == ComponentNames.FrontendModule).requirements = 
    {
        "InterfaceModule": 1,
        "htmlcomponent": 1,
        "backgroundtasks": 1,
        "filemanager": 1,
        "programmodule": 1
    }
    Components.find(component => component.name == ComponentNames.BackendModule).requirements = 
    {
        "BackendComponent": 1,
        "NetworkComponent": 1,
        "basicinterface": 1,
        "serversideprocess": 1,
        "programmodule": 1
    }
    Components.find(component => component.name == ComponentNames.InputModule).requirements = 
    {
        "UiComponent": 1,
        "BackendComponent": 1,
        "backgroundtasks": 1,
        "aestheticscomponent": 1,
        "developerintegration": 1
    }
    Components.find(component => component.name == ComponentNames.ContentManagementModule).requirements = 
    {
        "FrontendModule": 1,
        "InputModule": 1,
        "backgroundtasks": 3,
        "basicinterface": 3,
        "csscomponent": 1,
        "filemanager": 1,
        "crossovermodule": 1
    }
    Components.find(component => component.name == ComponentNames.VideoPlaybackModule).requirements = 
    {
        "VideoComponent": 1,
        "FrontendModule": 1,
        "basicinterface": 1,
        "htmlcomponent": 1,
        "aestheticscomponent": 1,
        "csscomponent": 1,
        "presentationmodule": 1
    }
    //Intermediate lead dev recipe updates
    Components.find(component => component.name == ComponentNames.SeoModule).requirements = 
    {
        "FrontendModule": 1,
        "SemanticComponent": 1,
        "backgroundtasks": 1,
        "processhandler": 1,
        "basicalgorithm": 1,
        "beginnerdevmodule": 1
    }
    Components.find(component => component.name == ComponentNames.EmailModule).requirements = 
    {
        "SmtpComponent": 1,
        "BackendModule": 1,
        "processhandler": 1,
        "presentationmodule": 1,
        "crossovermodule": 1
    }
    Components.find(component => component.name == ComponentNames.DatabaseLayer).requirements = 
    {
        "DatabaseComponent": 1,
        "BackendComponent": 2,
        "NetworkComponent": 1,
        "databasebacking": 1,
        "serversideprocess": 1,
        "filemanager": 1
    }
    Components.find(component => component.name == ComponentNames.NotificationModule).requirements = 
    {
        "UiComponent": 1,
        "BackendComponent": 1,
        "NetworkComponent": 1,
        "csscomponent": 1,
        "presentationmodule": 1,
        "beginnerdesignermodule": 1
    }
    Components.find(component => component.name == ComponentNames.AuthenticationModule).requirements = 
    {
        "DatabaseComponent": 1,
        "EncryptionComponent": 1,
        "BackendModule": 1,
        "basicinterface": 1,
        "processhandler": 1,
        "frameworkmodule": 1,
        "authcomponent": 1
    }
    //Expert lead dev modules
    Components.find(component => component.name == ComponentNames.PaymentGatewayModule).requirements = 
    {
        "DatabaseLayer": 1,
        "ApiClientModule": 1,
        "AuthenticationModule": 1,
        "condensedfeatures": 1,
        "efficiencycomponent": 1,
        "crossovermodule": 1
    }
    Components.find(component => component.name == ComponentNames.LocalizationModule).requirements = 
    {
        "I18nComponent": 1,
        "FrontendModule": 1,
        "condensedfeatures": 1,
        "efficiencycomponent": 1,
        "crossovermodule": 1
    }
    Components.find(component => component.name == ComponentNames.SearchModule).requirements = 
    {
        "DatabaseComponent": 1,
        "SearchAlgorithmComponent": 1,
        "BackendComponent": 1,
        "condensedfeatures": 1,
        "efficiencycomponent": 1,
        "crossovermodule": 1
    }
    Components.find(component => component.name == ComponentNames.BandwidthCompressionModule).requirements = 
    {
        "CompressionComponent": 1,
        "NetworkComponent": 1,
        "BackendComponent": 1,
        "condensedfeatures": 1,
        "efficiencycomponent": 1,
        "crossovermodule": 1
    }
    Components.find(component => component.name == ComponentNames.CodeOptimizationModule).requirements = 
    {
        "BackendModule": 2,
        "DatabaseLayer": 2,
        "FrontendModule": 2,
        "condensedfeatures": 1,
        "efficiencycomponent": 1,
        "crossovermodule": 1
    }
    Components.find(component => component.name == ComponentNames.ApiClientModule).requirements = 
    {
        "BackendModule": 1,
        "DatabaseLayer": 1,
        "CompressionComponent": 1,
        "condensedfeatures": 1,
        "efficiencycomponent": 1,
        "crossovermodule": 1
    }

    //Updated SysAdmin modules
    Components.find(component => component.name == ComponentNames.SwarmManagement).requirements = 
    {
        "Cluster": 1,
        "VirtualContainer": 1,
        "constantmonitor": 1,
        "monitorset": 1,
        "maintenancepack": 1,
        "verificationcomponent": 1
    }

    //Updated feature recipes

    //Localizor and Load
    exports.onLoadGame = settings => {
        GetRootScope().showMessage("CJ5Boss", "You have also initialized with the Boss Beginner Extensions mod.");

        $rootScope = GetRootScope();
        if($rootScope.options.language === "en"){
            //Developer
            Language['newdatatypes'] = "New Data Types";
            Language['programmingmath'] = "Programming Math";
            Language['basicalgorithm'] = "Basic Algorithm";
            Language['serversideprocess'] = "Server Side Process";
            Language['scriptingapi'] = "Scripting API";
            Language['filemanager'] = "File Manager";
            //Designer
            Language['csspack'] = "CSS Pack";
            Language['developerintegration'] = "Developer Integration";
            Language['designapi'] = "Design API";
            Language['colorpalette'] = "Color Palette";
            Language['aestheticasset'] = "Aesthetic Asset";
            //SysAdmin
            Langauge['verificationcomponent'] = "Verification Component";
            Language['authcomponent'] = "Auth Component";
            //Lead Developer
            Language['beginnerdevmodule'] = "Beginner Dev Module";
            Language['beginnerdesignermodule'] = "Beginner Designer Module";
            Language['programmodule'] = "Program Module";
            Language['presentationmodule'] = "Presentation Module";
            Language['crossovermodule'] = "Crossover Module";
        }
    }
}