{
  description = "Axone technical reference development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-26.05";
  };

  outputs =
    { nixpkgs, ... }:
    let
      supportedSystems = [
        "aarch64-darwin"
        "x86_64-darwin"
        "x86_64-linux"
        "aarch64-linux"
      ];

      forAllSystems = nixpkgs.lib.genAttrs supportedSystems;
      nixpkgsFor =
        system:
        import nixpkgs {
          inherit system;
          config.allowDeprecatedx86_64Darwin = true;
        };
    in
    {
      devShells = forAllSystems (
        system:
        let
          pkgs = nixpkgsFor system;
        in
        {
          default = pkgs.mkShell {
            packages = [
              pkgs.codespell
              pkgs.git
              pkgs.marksman
              pkgs.markdownlint-cli2
              pkgs.nixd
              pkgs.nodejs_22
              pkgs.rtk
              pkgs.shellcheck
              pkgs.typescript-language-server
              pkgs.vscode-langservers-extracted
              pkgs.yaml-language-server
              pkgs.yarn
            ];
            shellHook = ''
              echo "Axone technical reference development environment loaded"
            '';
          };
        }
      );
    };
}
