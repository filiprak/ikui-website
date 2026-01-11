<template>
    <footer :class="$style.footer">
        <div :class="$style.wrapper">
            <IkListItem class="ik-pa-0 ik-py-5">
                <template #prepend>
                    <IkImage src="/favicon.svg"
                             :size="32" />
                </template>
                <span class="ik-text--xl ik-text--bold">IK UI</span>
                <template #append>
                    <IkButtonGroup>
                        <IkButton icon="github:brands"
                                  tag="a"
                                  target="_blank"
                                  href="https://github.com/filiprak/ikolui.com"
                                  circle
                                  outline />
                        <IkButton icon="x-twitter:brands"
                                  tag="a"
                                  target="_blank"
                                  href="https://x.com/ui_ik56176"
                                  circle
                                  outline />
                        <IkButton icon="facebook-f:brands"
                                  tag="a"
                                  target="_blank"
                                  href="https://www.facebook.com/profile.php?id=61586101178544"
                                  circle
                                  outline />
                        <IkButton icon="npm:brands"
                                  tag="a"
                                  target="_blank"
                                  href="https://www.npmjs.com/package/@ikol/ui-kit"
                                  circle
                                  outline />
                    </IkButtonGroup>
                </template>
            </IkListItem>
        </div>
        <Hr v-if="false"
            class="ik-my-9" />
        <div v-if="false"
             :class="$style.wrapper">
            <div :class="$style.items">
                <div>
                    <div>[[_Components_]]</div>
                    <IkLink design="default">Item 1</IkLink>
                    <IkLink design="default">Item 2</IkLink>
                    <IkLink design="default">Item 3</IkLink>
                </div>
                <div>
                    <div>[[_FAQs_]]</div>
                    <IkLink design="default">Item 1</IkLink>
                    <IkLink design="default">Item 2</IkLink>
                    <IkLink design="default">Item 3</IkLink>
                </div>
                <div>
                    <div>[[_Resources_]]</div>
                    <IkLink design="default">Item 1</IkLink>
                    <IkLink design="default">Item 2</IkLink>
                    <IkLink design="default">Item 3</IkLink>
                </div>
                <div>
                    <div>[[_Blog_]]</div>
                    <IkLink design="default">Item 1</IkLink>
                    <IkLink design="default">Item 2</IkLink>
                    <IkLink design="default">Item 3</IkLink>
                </div>
            </div>
        </div>
        <Hr class="ik-my-9" />
        <div :class="$style.wrapper">
            <IkListItem class="ik-text--default-light ik-pa-0">
                <span class="ik-text--normal">© 2025 IK UI. All rights reserved.</span>
                <template #append>
                    <ThemeSwitch />
                </template>
            </IkListItem>
        </div>
    </footer>
</template>
<script setup lang="ts">
import { IkButton } from '@ikol/ui-kit/components/IkButton';
import { IkButtonGroup } from '@ikol/ui-kit/components/IkButtonGroup';
import { IkImage } from '@ikol/ui-kit/components/IkImage';
import { IkLink } from '@ikol/ui-kit/components/IkLink';
import { IkListItem } from '@ikol/ui-kit/components/IkList';

</script>
<style lang="css" module>
.footer {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: var(--s-10);
    padding-bottom: var(--s-10);
}

.footer :global(.ik-divider) {
    width: 100%;
}

.wrapper {
    display: flex;
    flex-direction: column;
    column-gap: var(--s-7);
    padding: 0 var(--layout-pad);
    max-width: var(--layout-w);
    width: 100%;
}

.items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    height: max-content;
    padding-bottom: var(--s-8);
    font-weight: var(--text-semibold);
    gap: var(--s-8);
}

.items > div > * {
    display: block !important;
    padding: var(--s-5) 0;
}

.items > div > div:first-of-type {
    font-weight: var(--text-bold);
    font-size: var(--text-lg);
}
</style>