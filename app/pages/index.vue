<template>
    <div>
        <!-- Hero Section -->
        <Section>
            <IkFlex column align_center spacing="10" wrap_text class="ik-text--center ik-py-15">
                <h1 class="ik-text--display-xl">[[_Build Stunning UI's, Faster._]]</h1>
                <h2 class="ik-text--lg ik-text--normal ik-text--default-light ik-text--center" style="max-width: 700px;">
                    [[_A beautiful, minimalistic, lightweight, and easy-to-use UI kit built for Vue developers. 
                    Simplify the process of building modern interfaces while keeping your code and design elegant._]]
                </h2>
                <div>
                    <IkButton design="primary"
                              tag="a"
                              href="/docs"
                              size="lg">
                        [[_Get started now_]]
                    </IkButton>
                </div>
                <!-- Hero Image Placeholder -->
                <div style="width: 100%; max-width: 1200px;">
                    <div class="ik-pa-8 ik-bg-neutral-regular-default ik-radius-6" 
                         style="border: 2px dashed var(--border-neutral-regular-default); min-height: 400px; display: flex; align-items: center; justify-content: center;">
                        <div class="ik-text--center">
                            <p class="ik-text--default-light ik-mb-4">[[_Hero Image Placeholder_]]</p>
                            <p class="ik-text--sm ik-text--default-light">[[_Add a hero image showcasing IK UI components in action (e.g., dashboard, landing page, or component showcase)_]]</p>
                        </div>
                    </div>
                </div>
            </IkFlex>
        </Section>

        <!-- Features Section -->
        <Section>
            <div class="ik-mb-12">
                <IkFlex column align_center spacing="4" wrap_text>
                    <h2 class="ik-text--display-lg ik-text--center">[[_Why Choose IK UI?_]]</h2>
                    <p class="ik-text--lg ik-text--default-light ik-text--center" style="max-width: 600px;">
                        [[_IK UI focuses on providing components that are designed to simplify your development workflow._]]
                    </p>
                </IkFlex>
            </div>
            <IkGrid spacing_x="8" spacing_y="8">
                <IkGridItem v-for="feature in features" 
                           :key="feature.title"
                           :xxs="12" 
                           :xs="6" 
                           :md="4">
                    <div class="ik-pa-10 ik-bg-primary-regular-default ik-radius-6" 
                         style="height: 100%; border: 1px solid var(--border-neutral-regular-default);">
                        <div class="ik-mb-4">
                            <IkIcon :icon="feature.icon" 
                                    circle 
                                    size_px="48" 
                                    design="primary" />
                        </div>
                        <h3 class="ik-text--lg ik-text--semibold ik-mb-3 ik-text-left">{{ feature.title }}</h3>
                        <p class="ik-text--default-light ik-text-left">{{ feature.description }}</p>
                    </div>
                </IkGridItem>
            </IkGrid>
        </Section>

        <!-- Philosophy Section -->
        <Section>
            <IkGrid spacing_x="8" spacing_y="8" class="ik-align-items-center">
                <IkGridItem :xxs="12" :md="6">
                    <div class="ik-text-left">
                        <h2 class="ik-text--display-lg ik-mb-4">[[_Built on Core Principles_]]</h2>
                        <p class="ik-text--lg ik-text--default-light ik-mb-8">
                            [[_IK UI is guided by four core principles that are reflected in every component. 
                            By focusing on clarity and ease of use, IK UI enables developers to focus on building 
                            functionality rather than wrestling with styles._]]
                        </p>
                        <IkFlex column spacing="8" wrap_text>
                            <div v-for="principle in principles" 
                                 :key="principle.name"
                                 class="ik-pa-8 ik-bg-primary-regular-default ik-radius-6 ik-text-left"
                                 style="border: 1px solid var(--border-neutral-regular-default);">
                                <h3 class="ik-text--lg ik-text--semibold ik-mb-2">{{ principle.name }}</h3>
                                <p class="ik-text--default-light">{{ principle.description }}</p>
                            </div>
                        </IkFlex>
                    </div>
                </IkGridItem>
                <IkGridItem :xxs="12" :md="6">
                    <div class="ik-pa-8 ik-bg-neutral-regular-default ik-radius-6" 
                         style="border: 2px dashed var(--border-neutral-regular-default); min-height: 500px; display: flex; align-items: center; justify-content: center;">
                        <div class="ik-text--center">
                            <p class="ik-text--default-light ik-mb-4">[[_Philosophy Image Placeholder_]]</p>
                            <p class="ik-text--sm ik-text--default-light">[[_Add an image illustrating the design philosophy (e.g., clean interface examples, minimalist design showcase)_]]</p>
                        </div>
                    </div>
                </IkGridItem>
            </IkGrid>
        </Section>

        <!-- Components Showcase Section -->
        <Section>
            <div class="ik-mb-12">
                <IkFlex column align_center spacing="4" wrap_text>
                    <h2 class="ik-text--display-lg ik-text--center">[[_Comprehensive Component Library_]]</h2>
                    <p class="ik-text--lg ik-text--default-light ik-text--center" style="max-width: 600px;">
                        [[_IK UI offers a wide range of components designed for everyday application needs. 
                        All components are intuitive, flexible, and easy to integrate into any Vue project._]]
                    </p>
                </IkFlex>
            </div>
            <IkGrid spacing_x="8" spacing_y="8">
                <IkGridItem v-for="component in componentCategories" 
                           :key="component.name"
                           :xxs="12" 
                           :xs="6" 
                           :md="4">
                    <div class="ik-pa-8 ik-bg-primary-regular-default ik-radius-6" 
                         style="height: 100%; border: 1px solid var(--border-neutral-regular-default);">
                        <div class="ik-mb-4" style="width: 100%; height: 200px; background: var(--bg-neutral-regular-default); border-radius: 8px; display: flex; align-items: center; justify-content: center; border: 1px dashed var(--border-neutral-regular-default);">
                            <div class="ik-text--center">
                                <p class="ik-text--sm ik-text--default-light">[[_Component Image_]]</p>
                                <p class="ik-text--xs ik-text--default-light ik-mt-2">{{ component.imageDescription }}</p>
                            </div>
                        </div>
                        <h3 class="ik-text--lg ik-text--semibold ik-mb-2 ik-text-left">{{ component.name }}</h3>
                        <p class="ik-text--sm ik-text--default-light ik-text-left">{{ component.description }}</p>
                    </div>
                </IkGridItem>
            </IkGrid>
        </Section>

        <!-- CTA Section -->
        <Section>
            <div class="ik-pa-10 ik-bg-primary-regular-default ik-radius-6" 
                 style="border: 1px solid var(--border-neutral-regular-default);">
                <IkFlex column align_center spacing="8" wrap_text>
                    <h2 class="ik-text--display-lg ik-text--center">[[_Ready to Get Started?_]]</h2>
                    <p class="ik-text--lg ik-text--default-light ik-text--center" style="max-width: 600px;">
                        [[_Start building beautiful interfaces with IK UI today. 
                        Explore our documentation and see how easy it is to integrate our components into your Vue project._]]
                    </p>
                    <IkFlex justify_center spacing="4" wrap_text wrap>
                        <IkButton design="primary"
                                  tag="a"
                                  href="/docs"
                                  size="lg">
                            [[_View Documentation_]]
                        </IkButton>
                        <IkButton design="default"
                                  variant="outline"
                                  tag="a"
                                  href="/docs/components"
                                  size="lg">
                            [[_Browse Components_]]
                        </IkButton>
                    </IkFlex>
                </IkFlex>
            </div>
        </Section>
    </div>
</template>
<script lang="ts" setup>
import { IkButton } from '@ikol/ui-kit/components/IkButton';
import { IkFlex } from '@ikol/ui-kit/components/IkFlex';
import { IkGrid, IkGridItem } from '@ikol/ui-kit/components/IkGrid';
import { IkIcon } from '@ikol/ui-kit/components/IkIcon';

const features = [
    {
        title: '[[_Minimal & Clean_]]',
        description: '[[_Every component is designed with simplicity and aesthetics in mind, avoiding unnecessary complexity._]]',
        icon: 'brush'
    },
    {
        title: '[[_Lightweight_]]',
        description: '[[_No heavy dependencies or bloated styles. Only what you need for your application._]]',
        icon: 'feather'
    },
    {
        title: '[[_Vue-Powered_]]',
        description: '[[_Fully written in Vue, leveraging its reactive system for seamless interactivity._]]',
        icon: 'bolt'
    },
    {
        title: '[[_Customizable_]]',
        description: '[[_Flexible props and slots allow you to adapt components to your needs without overriding core styles._]]',
        icon: 'sliders'
    },
    {
        title: '[[_Consistent_]]',
        description: '[[_A coherent design language across all components ensures a uniform look and feel._]]',
        icon: 'layer-group'
    },
    {
        title: '[[_Accessible_]]',
        description: '[[_Built with accessibility in mind to ensure that applications are usable by everyone._]]',
        icon: 'universal-access'
    }
];

const principles = [
    {
        name: '[[_Beauty_]]',
        description: '[[_Interfaces should be visually pleasing without relying on flashy effects. Aesthetic simplicity enhances user experience._]]'
    },
    {
        name: '[[_Minimalism_]]',
        description: '[[_Less is more. Every element has a purpose. Avoid clutter and unnecessary design noise._]]'
    },
    {
        name: '[[_Simplicity_]]',
        description: '[[_Components should be intuitive and easy to implement, even for developers new to Vue._]]'
    },
    {
        name: '[[_Consistency_]]',
        description: '[[_Uniform styling and behavior across all components create a predictable and reliable interface for users._]]'
    }
];

const componentCategories = [
    {
        name: '[[_Buttons_]]',
        description: '[[_Interactive buttons with multiple designs and variants for all your action needs._]]',
        imageDescription: '[[_Showcase of button variants and designs_]]'
    },
    {
        name: '[[_Forms & Inputs_]]',
        description: '[[_Comprehensive form components with validation and flexible field options._]]',
        imageDescription: '[[_Form examples with various input types_]]'
    },
    {
        name: '[[_Cards & Panels_]]',
        description: '[[_Flexible card components for displaying content in organized, visually appealing layouts._]]',
        imageDescription: '[[_Card component variations and layouts_]]'
    },
    {
        name: '[[_Modals & Toasts_]]',
        description: '[[_Dialog components and notification systems for user feedback and interactions._]]',
        imageDescription: '[[_Modal and toast notification examples_]]'
    },
    {
        name: '[[_Navigation_]]',
        description: '[[_Navigation elements including menus, breadcrumbs, tabs, and more._]]',
        imageDescription: '[[_Navigation component showcase_]]'
    },
    {
        name: '[[_Layout Components_]]',
        description: '[[_Grid, flex, and other layout utilities for building responsive interfaces._]]',
        imageDescription: '[[_Layout system examples and grid showcases_]]'
    }
];
</script>
